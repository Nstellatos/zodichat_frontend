import { Link } from 'react-router-dom';

function PostCard({ id, title, description, imageUrl }) {
	return (
		<div className="post">
			<Link to={`/posts/${id}`}>
				<img className="postImg" src={imageUrl} alt={title} />
			</Link>
			<div className="postInfo">
				<span className="postTitle">
					<Link to={`/posts/${id}`}>
						<h3>{title}</h3>
					</Link>
				</span>
			</div>
			<p className="postDesc">{description}</p>
		</div>
	);
}
export default PostCard;
