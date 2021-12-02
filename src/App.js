import './App.css';
import { PostIndex, PostShow, Nav } from './components';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/posts/:id">
					<PostShow />
				</Route>
				<Route path="/posts">
					<PostIndex />
				</Route>
			</Switch>
		</>
	);
}

export default App;
