import { NavLink } from 'react-router-dom';
function PostCard({ id, title, description, imageUrl, createdAt }) {
	return (
		<div className="col-md-4 mb-4">
			<div className="card h-100 text-center p-4">
				<img src={imageUrl} className="card-img-top" alt="" height="250px" />
				<div className="card-body">
					<h5 className="card-title mb-0">{title}</h5>
					<p className="postDescription ">{description}</p>
					<div className="postDate">{new Date(createdAt).toDateString()}</div>
					<div></div>
					<NavLink to={`/posts/${id}`} className="btn btn-outline-dark">
						VIEW
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default PostCard;
