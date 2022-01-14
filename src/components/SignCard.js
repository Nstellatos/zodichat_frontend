import { Link } from 'react-router-dom';

export default function SignCard({ id, name, imageUrl }) {
	return (
		<div className="card">
			<Link to={`/signs/${id}`}>
				<img className="signIcon" src={imageUrl} alt={name} />
			</Link>
			<p>{name}</p>
		</div>
	);
}
