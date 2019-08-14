import React, {useEffect} from 'react';
import pt from 'prop-types';


const Props = {
	geometry: pt.arrayOf(pt.number).isRequired,
	color: pt.string.isRequired,
	text: pt.string.isRequired,
	label: pt.string.isRequired,
	renderPlaceMark: pt.func.isRequired,
};

const Point = ({children, renderPlaceMark, geometry, color, text, label}) => {
	const options = {
		preset: 'islands#blueStretchyIcon',
		color,
	};
	const properties = {
		iconCaption: label,
		iconContent: text,
		draggable: false,
	};

	useEffect(() => renderPlaceMark({geometry, properties, options}), [geometry, text, label]);

	return <div>{React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			geometry
		});
	})}</div>;
};

Point.propTypes = Props;


export default Point;
