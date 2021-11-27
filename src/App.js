import './App.css';
import { PostIndex, PostShow } from './components';
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
