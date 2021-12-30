import { useState } from 'react';
import { submitSignup, submitLogin } from '../redux/actionCreators';
import { connect } from 'react-redux';

function Auth(props) {
	const [signup, setSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [sunSign, setSunSign] = useState('');
	const [password, setPassword] = useState('');

	const toggleSignup = () => setSignup(!signup);

	const handleSubmit = (e) => {
		e.preventDefault();
		signup
			? props.submitSignup({ username, password, sun_sign: sunSign })
			: props.submitLogin({ username, password });
	};

	return (
		<>
			<div className="center">
				{signup ? <h1>SIGN UP</h1> : <h1>LOGIN</h1>}

				<form onSubmit={handleSubmit}>
					<h3>Username:</h3>
					<div className="inputbox">
						<input
							type="text"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					{signup && (
						<h3>
							Sun Sign:
							<div className="inputbox">
								<select
									value={sunSign}
									onChange={(e) => setSunSign(e.target.value)}
								>
									<option value="aries">ARIES</option>
									<option value="taurus">TAURUS</option>
									<option value="gemini">GEMINI</option>
									<option value="cancer">CANCER</option>
									<option value="leo">LEO</option>
									<option value="virgo">VIRGO</option>
									<option value="libra">LIBRA</option>
									<option value="scorpio">SCORPIO</option>
									<option value="sagittarius">SAGITTARIUS</option>
									<option value="capricorn">CAPRICORN</option>
									<option value="aquarius">AQUARIUS</option>
									<option value="pisces">PISCES</option>
								</select>
							</div>
						</h3>
					)}
					<h3>
						Password:
						<div className="inputbox">
							<input
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</h3>
					<button type="submit">SUBMIT</button>
				</form>

				<button onClick={toggleSignup}>
					{' '}
					or {signup ? 'LOGIN' : 'SIGNUP'}
				</button>
			</div>
		</>
	);
}
export default connect(null, { submitSignup, submitLogin })(Auth);
