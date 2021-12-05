import './App.css';
import { SignIndex, SignShow, Nav } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/signs/:id">
					<SignShow />
				</Route>
				<Route path="/signs">
					<SignIndex />
				</Route>
			</Switch>
		</>
	);
}

export default App;
