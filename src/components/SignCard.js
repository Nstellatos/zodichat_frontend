import { Link } from 'react-router-dom';

export default function SignCard({ id, name, imageUrl }) {
	return (
		<div className="sign">
			<Link to={`/signs/${id}`}>
				<img className="signImg" src={imageUrl} alt={name} />
			</Link>
			<div className="signInfo">
				<span className="signName">
					<Link to={`/signs/${id}`}>
						<h3>{name}</h3>
					</Link>
				</span>
			</div>
		</div>
	);
}
