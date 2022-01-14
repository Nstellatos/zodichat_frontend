import { Stars } from '../components';
export default function Header() {
	return (
		<div className="hero">
			<div className="card bg-dark text-white border-0">
				<video className="card-img" autoPlay loop muted>
					<source src={Stars} type="video/mp4" />
				</video>
				<div className="card-img-overlay d-flex flex-column justify-content-center">
					<div className="container">
						<h5 className="card-title display-3 fw-bolder mb-0">ZODICHAT</h5>
						<p className="card-text lead fs-2">WHERE THE SIGNS COME TO CHAT</p>
					</div>
				</div>
			</div>
		</div>
	);
}
