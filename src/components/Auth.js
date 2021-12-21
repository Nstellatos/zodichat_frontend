import { useState } from 'react';

function Auth(props) {
	const [signup, setSignup] = useState(false);
	const toggleSignup = () => setSignup(!signup);
	return (
		<>
			{signup ? <h1>Sign up!</h1> : <h1>Login!</h1>}
			<form>
				<label>
					Username:
					<input type="text" name="username" />
				</label>
				<label>
					Password:
					<input type="password" name="password" />
				</label>
			</form>
			<button onClick={toggleSignup}> or {signup ? 'Login' : 'Signup'}</button>
		</>
	);
}
export default Auth;
