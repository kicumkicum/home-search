import React, {useEffect} from 'react';
import pt from 'prop-types';
import Controls from '../controls/controls.container';
import Map from '../map/map.container';
import Point from '../point/point.container';
import Route from '../route/route.container';


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
								key={`point` + point.points.join(`,`)}
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
		<Controls
			width={200}
			height={600}
		/>
	</div>;
};

App.propTypes = Props;


export default App;
