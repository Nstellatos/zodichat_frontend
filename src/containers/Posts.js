import { connect } from 'react-redux';
import { PostCard } from '../components';

function Posts({ posts }) {
	return (
		<div className="posts">
			{posts.map((post) => (
				<PostCard {...post} key={post.id} />
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({
	posts: state.selectedSign.posts,
});

export default connect(mapStateToProps)(Posts);
