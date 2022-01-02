import { useState } from 'react';
import Modal from 'react-modal';

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

						<h4>{username}</h4>
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
