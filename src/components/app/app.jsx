import React, {useEffect} from 'react';
import pt from 'prop-types';
import Controls from '../../containers/controls/controls.js';
import Map from '../../containers/map/map.js';
import Point from '../../containers/point/point.js';
import Route from '../../containers/route/route.js';


const Props = {
	initMap: pt.func.isRequired,
	mapIsInit: pt.bool.isRequired,
};

const App = (props) => {
	const {initMap, mapIsInit, points} = props;

	useEffect(initMap, [points]);

	return <div className="App" style={{width: `800px`, height: `600px`}}>
		{
			mapIsInit &&
			<Map>

				{
					points.map((point) => {
						return <Route
							key={`route` + point.points.join(`,`)}
							points={[point.points, [`метро Старая деревня`]]}
							params={{
								routingMode: `masstransit`,
								multiRoute: true
							}}
						>
							<Point
								geometry={[point.points[0], point.points[1]]}
								color={`green`}
								text={"aabbcc"}
								label={`ccdd`}
							/>
						</Route>;
					})
				}
			</Map>
		}
	</div>;
};

App.propTypes = Props;


export default App;
