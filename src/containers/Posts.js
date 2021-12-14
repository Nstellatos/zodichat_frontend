import { useEffect } from 'react';
import { getPosts } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { PostCard } from '../components';

function Posts({ getPosts, posts }) {
	useEffect(getPosts, [getPosts]);

	return (
		<>
			<div className="posts">
				{posts.map((post) => (
					<PostCard {...post} key={post.id} />
				))}
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return { posts: state.posts };
};

export default connect(mapStateToProps, { getPosts })(Posts);
