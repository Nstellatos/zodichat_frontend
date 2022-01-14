import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost, clearPost } from '../redux/actionCreators';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function PostShow({
	getPost,

	title,
	description,
	imageUrl,
	username,
	createdAt,
	clearPost,
}) {
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		getPost(id);
		return clearPost;
	}, [getPost, id, clearPost]);

	const spinner = () => <div className="loader"></div>;
	const loadedPage = () => (
		<>
			<div className="postShow">
				<div className="postShowWrapper">
					<img className="postShowImg" src={imageUrl} alt=""></img>
					<h1 className="postShowTitle">{title}</h1>
					<div className="postShowInfo">
						<span className="postShowUser">
							Posted By: <b>{username}</b>
						</span>
						<span className="singlePostDate">
							{new Date(createdAt).toDateString()}
						</span>
					</div>
					<p className="postShowDescription">{description}</p>
				</div>
			</div>
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
	return { ...state.selectedPost };
};

export default connect(mapStateToProps, { getPost, clearPost })(PostShow);
