import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators';

function Nav({ logout, username }) {
	const loggedInRender = () => (
		<div className="nav">
			<div className="navLeft">Z O D I C H A T</div>
			<div className="navCenter">
				<ul className="navList">
					<li className="navListItem">
						<Link to="/">SIGNS</Link>
					</li>
				</ul>
			</div>
			<div className="navRight">
				<ul className="navList">
					<li className="navListItem" onClick={logout}>
						LOGOUT
					</li>
				</ul>
			</div>
		</div>
	);

	const loggedOutRender = () => '';

	return username ? loggedInRender() : loggedOutRender();
}

const mapStateToProps = (state) => ({ username: state.user.username });

export default connect(mapStateToProps, { logout })(Nav);

/*
function Nav({ logout, user }) {
	<div className="top">
		<div className="topLeft">Z O D I C H A T</div>
		<div className="topCenter">
			<ul className="topList">
				<li className="topListItem">
					<Link className="link" to="/signs">
						HOME
					</Link>
				</li>

				<li className="topListItem">
					<Link className="link" to="/write">
						WRITE
					</Link>
				</li>
				<li className="topListItem" onClick={logout}>
					{user && 'LOGOUT'}
				</li>
			</ul>
		</div>
		<div className="topRight">
			<Link to="/settings">SETTINGS</Link>
		</div>
	</div>;
}
const mapStateToProps = (state) => ({ username: state.user.username });

export default connect(mapStateToProps, { logout })(Nav);
*/
