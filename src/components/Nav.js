import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div className="nav">
			<div className="navLeft">
				<Link to="/">Home</Link>
			</div>
			<div className="navCenter"></div>

			<div className="navRight">
				<img
					className="navImg"
					src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
					alt=""
				/>
			</div>
		</div>
	);
}
