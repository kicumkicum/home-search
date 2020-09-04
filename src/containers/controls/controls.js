import {connect} from 'react-redux';
import {Operation} from '../../redux/';
import Controls from '../../components/controls/controls.jsx';


const mapDispatchToProps = (dispatch) => ({
	parseXSL({file, schema}) {
		dispatch(Operation.parseXSL({file, schema}));
	},
});


export default connect(null, mapDispatchToProps)(Controls);
