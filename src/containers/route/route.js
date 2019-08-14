import {connect} from 'react-redux';
import {Operation} from '../../redux/';
import Route from '../../components/route/route.jsx';

const foo = (store, ownProps) => {
	const a = store.__routes[ownProps.points.map((point) => point.slice().reverse().toString()).join(`_`)];
	if (a && a.duration && a.duration.value) {
		return a.duration.text
	}

	return `-1`;
};

const mapStateToProps = (store, ownProps) => ({
	duration: foo(store, ownProps),
});

const mapDispatchToProps = (dispatch) => ({
	loadRoute({points, params}) {
		dispatch(Operation.loadRoute({points, params}));
	},
});


export default connect(mapStateToProps, mapDispatchToProps)(Route);
