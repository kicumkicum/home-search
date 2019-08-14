import {Direction, PointsGeo} from '../data/trains';

/**
 * @enum {string}
 */
const PointType = {
	BUS: `bus`,
	TRAIN: `train`,
};

const MapStatus = {
	INIT: `init`,
	UNINIT: `uninit`,
};

const polygon = [[59.513228, 29.701341], [60.181192, 31.130489]];

const createStuct = (pointsGeo) => pointsGeo.map(it => it.map(it => {
	return {
		points: it.GeoObject.Point.pos
			.split(' ')
			.map(it => parseFloat(it))
			.reverse(),
		item: it.GeoObject,
		type: PointType.TRAIN,
	};
}));

const stuctItems = Object.keys(Direction)
	.map((direction) => PointsGeo[Direction[direction]])
	.map(createStuct)
	.reduce((prev, current) => (prev.concat(current)), []);

const itemsInPolygon = stuctItems.map(it => it.filter(it => {
	const points = it.points;
	return points[0] > polygon[0][0] && points[1] > polygon[0][1] &&
		points[0] < polygon[1][0] && points[1] < polygon[1][1];
}))
	.filter(Boolean)
	.reduce((result, current) => (result.concat(current)), []);

/**
 * @type {{
 * 	polygon: Array<Array<number|string>>,
 *  points: Array<{
 *    points: Array<>,
 *    duration: number|undefined,
 *    type: PointType,
 *  }>,
 *  targetPoint: string
 * }}
 */
const initialState = {
	__placeMarks: {},
	__routes: {},
	mapStatus: MapStatus.UNINIT,
	polygon: [[59.513228, 29.701341], [60.181192, 31.130489]],
	points: itemsInPolygon,
	routes: [],
	targetPoint: `метро Старая деревня`,
};

const ActionType = {
	MAP_STATUS_CHANGE: `map-status-change`,
	ADD_ROUTE: `add-route`,
};

const ActionCreator = {
	addRoute: ({route}) => ({
		type: ActionType.ADD_ROUTE,
		payload: {route},
	}),
	changeMapStatus: ({status}) => ({
		type: ActionType.MAP_STATUS_CHANGE,
		payload: {status},
	}),
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_ROUTE:
			const {__routes} = state;
			const {route} = action.payload;

			const routeObj = {
				item: route,
				points: route.model.properties.get(`waypoints`).map((it) => it.request),
				duration: route.model.getRoutes()
					.slice()
					.map((it) => it.properties.get(`duration`))
					.sort((a, b) => a.value - b.value)[0]
			};

			const key = routeObj.points.map((point) => point.toString()).join(`_`);

			__routes[key] = routeObj;

			return {
				...state,
				routes: state.routes.concat(key),
			};
		case ActionType.MAP_STATUS_CHANGE:
			return {...state, mapStatus: action.payload.status};
	}

	return state;
};

const Operation = {
	initMap() {
		return (dispatch, _getState, ymaps) => {
			return ymaps.loadApi()
				.then(() => ymaps.loadModules([`Map`, `Placemark`, `route`]))
				.then(() => dispatch(ActionCreator.changeMapStatus({status: MapStatus.INIT})))
				.catch((e) => {
					dispatch(ActionCreator.changeMapStatus({status: MapStatus.UNINIT}));
					throw e;
				});
		}
	},
	loadModule() {},
	loadRoute({points, params}) {
		return (dispatch, getState, ymaps) => {
			return ymaps.createRoute({points, params})
				.then((route) => {
					debugger
					dispatch(ActionCreator.addRoute({route}));
				});
		}
	},
	renderMap({container, options}) {
		return (dispatch, _getState, ymaps) => {
			return ymaps.createMap({container, options})
		}
	},
	renderPlaceMark({geometry, options, properties}) {
		return (dispatch, getState, ymaps) => {
			return ymaps.createPlaceMark({geometry, options, properties})
				.then((placeMark) => ymaps.renderPlaceMark({placeMark}));
		}
	},
};

export {
	ActionType,
	ActionCreator,
	MapStatus,
	Operation,
	reducer,
}
