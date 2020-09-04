import {connect} from 'react-redux';
import {Operation} from '../../redux';
import Map from './map.jsx';


const mapDispatchToProps = (dispatch) => ({
	renderMap({container, options}) {
		dispatch(Operation.renderMap({container, options}));
	},
});

export default connect(null, mapDispatchToProps)(Map);
