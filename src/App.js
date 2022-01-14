import './App.css';
import {
	SignShow,
	Signs,
	Navbar,
	PostShow,
	Posts,
	Auth,
	Header,
	Home,
} from './components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { autoLogin } from './redux/actionCreators';

function App({ user, autoLogin }) {
	useEffect(() => localStorage.token && autoLogin(), [autoLogin]);
	return (
		<>
			<Navbar />
			{user.username ? (
				<Switch>
					<Route path="/signs/:id" exact>
						<SignShow />
					</Route>
					<Route path="/posts/:id" exact>
						<PostShow />
					</Route>

					<Route path="/signs" exact>
						<Signs />
					</Route>
					<Route path="/posts" exact>
						<Posts />
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
				</Switch>
			) : (
				<Switch>
					<Route exact path="/" component={Header} />
					<Route exact path="/login" component={Auth} />
				</Switch>
			)}
		</>
	);
}

const mapStateToProps = (state) => ({ user: state.user });

export default connect(mapStateToProps, { autoLogin })(App);
