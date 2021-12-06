import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../redux/actionCreators';
import { useEffect } from 'react';

function PostShow({
	getPost,
	title,
	imageUrl,
	username,

	description,
	id,
}) {
	const routeId = useParams().id;

	useEffect(() => {
		getPost(routeId);
		// if you return a function in your useEffect function, it will run that when the component is about to unmount
	}, [getPost, routeId]);

	const spinner = () => <div className="loader"></div>;
	const loadedPage = () => (
		<div className="show">
			<img src={imageUrl} alt={title} />
			<p>{description}</p>
			{username}
		</div>
	);

	return id ? loadedPage() : spinner();
}

const mapStateToProps = (state) => {
	return { ...state.selectedPost };
};

export default connect(mapStateToProps, { getPost })(PostShow);
