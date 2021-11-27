import './App.css';
import PostIndex from './containers/PostIndex';
import PostShow from './components/PostShow';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
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
