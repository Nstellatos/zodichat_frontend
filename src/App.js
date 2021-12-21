import './App.css';
import { SignShow, Nav, Home } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/signs/:id" exact>
					<SignShow />
				</Route>

				<Route path="*">
					<h1 className="text-center">Four oh Four</h1>
				</Route>
			</Switch>
		</>
	);
}

export default App;
