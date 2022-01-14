import { useState } from 'react';
import { submitSignup, submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Auth(props) {
	const [signup, setSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	const toggleSignup = () => setSignup(!signup);

	const handleSubmit = (e) => {
		e.preventDefault();
		signup
			? props.submitSignup({ username, password })
			: props.submitLogin({ username, password });
		history.push('/');
	};

	return (
		<>
			<div className="login">
				<div className="auth-inner">
					<span className="loginTitle">
						{signup ? <h1>SIGN UP</h1> : <h1>LOGIN</h1>}
					</span>
					<form className="loginForm" onSubmit={handleSubmit}>
						<label>Username:</label>
						<input
							type="text"
							className="loginInput"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>

						<label>Password:</label>
						<input
							type="password"
							name="password"
							className="loginInput"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button type="submit" className="btn btn-primary btn-block">
							SUBMIT
						</button>
					</form>

					<button className="loginButton" onClick={toggleSignup}>
						{' '}
						{signup ? 'LOGIN' : 'Not a member? SIGNUP'}
					</button>
				</div>
			</div>
		</>
	);
}
export default connect(null, { submitSignup, submitLogin })(Auth);
