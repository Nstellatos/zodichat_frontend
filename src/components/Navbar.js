import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../redux/actionCreators';

function Navbar({ logout, username }) {
	const loggedInRender = () => (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
				<div className="container">
					<NavLink className="navbar-brand fw-bold fs-4" to="/">
						Z O D I C H A T
					</NavLink>

					<div className="buttons">
						<NavLink to="/" className="btn btn-outline-dark">
							<i className="fa fa-sign-out me-1"></i>
							<i onClick={logout}>LOGOUT</i>
						</NavLink>
					</div>
				</div>
			</nav>
		</div>
	);

	const loggedOutRender = () => (
		<nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
			<div className="container">
				<NavLink className="navbar-brand fw-bold fs-4" to="/">
					Z O D I C H A T
				</NavLink>
				<div className="buttons">
					<NavLink to="/login" className="btn btn-outline-dark">
						<i className="fa fa-sign-in me-1"></i> LOGIN
					</NavLink>
				</div>
			</div>
		</nav>
	);

	return username ? loggedInRender() : loggedOutRender();
}

const mapStateToProps = (state) => ({ username: state.user.username });

export default connect(mapStateToProps, { logout })(Navbar);
