import { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

function PostCard({ id, title, description, imageUrl, username }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="post">
			<img className="postImg" src={imageUrl} alt={title} />
			<div className="postInfo">
				<span className="postTitle">
					<h3>{title}</h3>
				</span>

				<p className="postDesc">{description}</p>
			</div>

			<button onClick={() => setIsOpen(true)}>Open</button>
			<Modal
				className="main"
				isOpen={isOpen}
				onRequestClose={() => setIsOpen(false)}
				style={{
					overlay: {
						backgroundColor: 'black',
					},
					content: {
						backgroundColor: 'white',
					},
				}}
			>
				<img className="postImg" src={imageUrl} alt={title} />
				<div className="postInfo">
					<span className="postTitle">
						<h3>{title}</h3>

						<Link to={`/users/${id}`}>
							<h4>{username}</h4>
						</Link>
					</span>
					<p>{description}</p>
				</div>
				<button onClick={() => setIsOpen(false)}>Close</button>
			</Modal>
		</div>
	);
}
export default PostCard;
/*
function PostCard({ id, title, description, imageUrl }) {
	return (
		<div className="post">
			<img className="postImg" src={imageUrl} alt={title} />
			<div className="postInfo">
				<span className="postTitle">
					<h3>{title}</h3>
				</span>
			</div>

			
				<p>{description}</p>
			
		</div>
	);
}
export default PostCard;
*/
