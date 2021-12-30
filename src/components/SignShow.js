import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSign, clearSign } from '../redux/actionCreators';
import { useEffect } from 'react';
import { Posts, PostForm } from './';
function SignShow({
	getSign,
	name,
	imageUrl,

	clearSign,
	id,
}) {
	const routeId = useParams().id;

	useEffect(() => {
		getSign(routeId);
		// if you return a function in your useEffect function, it will run that when the component is about to unmount
		return clearSign;
	}, [getSign, routeId, clearSign]);

	const spinner = () => <div className="loader"></div>;
	const loadedPage = () => (
		<>
			<div className="main">
				<h1>{name}</h1>

				<Posts />
			</div>
			<PostForm />
		</>
	);

	return id ? loadedPage() : spinner();
}

const mapStateToProps = (state) => {
	return { ...state.selectedSign };
};

export default connect(mapStateToProps, { getSign, clearSign })(SignShow);
