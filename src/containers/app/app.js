import {connect} from 'react-redux';
import {Operation, MapStatus} from '../../redux/';
import App from '../../components/app/app.jsx';


const mapStateToProps = (state, ownProps) => ({
	mapIsInit: state.mapStatus === MapStatus.INIT,
	points: state.points,
});

const mapDispatchToProps = (dispatch) => ({
	initMap() {
		dispatch(Operation.initMap());
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
