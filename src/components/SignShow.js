import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSign, clearSign } from '../redux/actionCreators';
import { useEffect } from 'react';
import { SignPosts, PostForm } from './';
import { useHistory } from 'react-router-dom';
function SignShow({
	getSign,
	name,
	imageUrl,

	clearSign,
	id,
}) {
	const routeId = useParams().id;
	const history = useHistory();

	useEffect(() => {
		getSign(routeId);
		// if you return a function in your useEffect function, it will run that when the component is about to unmount
		return clearSign;
	}, [getSign, routeId, clearSign]);

	const spinner = () => <div className="loader"></div>;
	const loadedPage = () => (
		<>
			<div className="signShow">
				<img className="signShowImg" src={imageUrl} alt=""></img>
				<h1>{name}</h1>
			</div>
			<PostForm />
			<SignPosts />
			<div className="button">
				<button
					className="btn btn-outline-dark"
					onClick={() => history.goBack()}
				>
					GO BACK
				</button>
			</div>
		</>
	);

	return id ? loadedPage() : spinner();
}

const mapStateToProps = (state) => {
	return { ...state.selectedSign };
};

export default connect(mapStateToProps, { getSign, clearSign })(SignShow);
