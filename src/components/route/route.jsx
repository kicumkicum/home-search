import React from 'react';
import pt from 'prop-types';


const Props = {
	duration: pt.string,
	loadRoute: pt.func.isRequired,
	points: pt.any.isRequired,
	params: pt.object.isRequired,
};

const Route = ({points, params, loadRoute, duration, children}) => {
	loadRoute({points, params});
	console.log({duration})

	return <div>{React.Children.map(children, (child) => {
		return React.cloneElement(child, duration ? {
			text: duration,
		} : {});
	})}</div>;
};

Route.propTypes = Props;


export default Route;
