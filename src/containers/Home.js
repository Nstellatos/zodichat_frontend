import { Header, Posts, Signs } from '../components';

export default function Home() {
	return (
		<>
			<Header />
			<Signs />
			<hr />
			<h1 className="display-6 fw-bolder text-center">
				ALL POSTS
				<Posts />
			</h1>
		</>
	);
}
