import { Link } from 'react-router-dom';

export default function PostCard({ id, title, imageUrl }) {
	return (
		<div className="post">
			<Link to={`/posts/${id}`}>
				<img src={imageUrl} alt={title} />
			</Link>
			<Link to={`/posts/${id}`}>
				<h2>{title}</h2>
			</Link>
		</div>
	);
}
