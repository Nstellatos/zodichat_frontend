import { useEffect } from 'react';
import { getPosts } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { PostCard } from '../components';

function Posts({ getPosts, posts }) {
	useEffect(getPosts, [getPosts]);

	return (
		<div className="container my-2 py-2">
			<div className="row">
				<div className="col-12 mb-5">
					<hr />
				</div>
			</div>
			<div className="row justify-content-center">
				{posts.map((post) => (
					<PostCard {...post} key={post.id} />
				))}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(Posts);
