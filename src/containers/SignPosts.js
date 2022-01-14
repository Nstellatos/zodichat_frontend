import { connect } from 'react-redux';
import { PostCard } from '../components';

function SignPosts({ posts }) {
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

const mapStateToProps = (state) => ({
	posts: state.selectedSign.posts,
});

export default connect(mapStateToProps)(SignPosts);
