import React from 'react';
import pt from 'prop-types';

const Props = {
	renderMap: pt.func.isRequired,
};

const Map = class extends React.Component {
	constructor(props) {
		super(props);

		this.ref = React.createRef();
	}

	componentDidMount() {
		const {renderMap} = this.props;

		renderMap({
			container: this.ref.current,
			options: {center: [59.990827, 30.267831], zoom: 8.5}
		});
	}

	render() {
		const {children} = this.props;

		return <div
			style={{
				width: `600px`,
				height: `600px`,
				display: `inline-block`,
			}}
			ref={this.ref}
		>
			{children}
		</div>;
	};
};

Map.propTypes = Props;

export default Map;
