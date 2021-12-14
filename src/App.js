import './App.css';
import { SignIndex, SignShow, Nav, Home, Posts } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/signs/:id">
					<SignShow />
				</Route>
				<Route path="/posts">
					<Posts />
				</Route>
				<Route path="/signs">
					<SignIndex />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</>
	);
}

export default App;
