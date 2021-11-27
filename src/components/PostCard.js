export default function PostCard({ title, description, image_url }) {
	return (
		<div className="post">
			<img src={image_url} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
