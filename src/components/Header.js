import { Stars } from '../components';

const Header = () => {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">WELCOME TO</span>
				<span className="headerTitleLg">ZODICHAT</span>

				<video className="headerImg" autoPlay loop muted>
					<source src={Stars} type="video/mp4" />
				</video>
			</div>
		</div>
	);
};
export default Header;
