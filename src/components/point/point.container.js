import {connect} from 'react-redux';
import {Operation} from '../../redux';
import Point from './point.jsx';


const mapDispatchToProps = (dispatch) => ({
	renderPlaceMark({geometry, properties, options}) {
		dispatch(Operation.renderPlaceMark({geometry, properties, options}));
	},
});


export default connect(null, mapDispatchToProps)(Point);
