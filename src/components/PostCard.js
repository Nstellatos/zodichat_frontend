export default function PostCard({ title, description, imageUrl }) {
	return (
		<div className="post">
			<img src={imageUrl} alt={title} />
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
