import './App.css';
import { SignIndex, SignShow, Nav, PostShow } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/posts/:id">
					<PostShow />
				</Route>
				<Route path="/signs/:id">
					<SignShow />
				</Route>
				<Route path="/signs">
					<SignIndex />
				</Route>
				<Route exact path="/">
					<SignIndex />
				</Route>
			</Switch>
		</>
	);
}

export default App;
