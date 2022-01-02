import './App.css';
import { SignShow, SignIndex, Home, Nav } from './components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './redux/actionCreators';

function App({ user, autoLogin }) {
	useEffect(() => localStorage.token && autoLogin(), [autoLogin]);
	return (
		<>
			<Nav />
			{user.username ? (
				<Switch>
					<Route path="/signs" exact>
						<SignIndex />
					</Route>

					<Route path="/signs/:id" exact>
						<SignShow />
					</Route>
					<Route path="/" exact>
						<SignIndex />
					</Route>
				</Switch>
			) : (
				<Home />
			)}
		</>
	);
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { autoLogin })(App);
