export const getSigns = () => {
	return (dispatch) =>
		fetch('http://localhost:3000/signs')
			.then((res) => res.json())
			.then((signs) => dispatch({ type: 'GET_SIGNS', payload: signs }));
};
export const getSign = (id) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/signs/${id}`)
			.then((res) => res.json())
			.then((sign) => dispatch({ type: 'GET_SIGN', payload: sign }));
};
export const clearSign = () => ({ type: 'CLEAR_SIGN' });
export const clearPost = () => ({ type: 'CLEAR_POST' });

export const submitSignup = (user) => {
	return (dispatch) =>
		fetch('http://localhost:3000/users', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then((res) => handleUserResponse(res, dispatch));
};
export const submitLogin = (user) => {
	return (dispatch) =>
		fetch('http://localhost:3000/sessions', {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then((res) => handleUserResponse(res, dispatch));
};

export const submitPost = (post, signId) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/signs/${signId}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.token,
			},
			body: JSON.stringify(post),
		}).then((res) => {
			if (res.ok) {
				res
					.json()
					.then((post) => dispatch({ type: 'ADD_POST', payload: post }));
			} else {
				res.json().then((res) => alert(res.errors));
			}
		});
};
export const autoLogin = () => {
	return (dispatch) =>
		fetch('http://localhost:3000/me', {
			headers: {
				Authorization: localStorage.token,
			},
		}).then((res) => handleUserResponse(res, dispatch));
};

export const logout = () => {
	return (dispatch) => {
		localStorage.clear();
		dispatch({ type: 'LOGOUT' });
	};
};

function handleUserResponse(res, dispatch) {
	if (res.ok) {
		res.json().then((response) => {
			localStorage.token = response.token;
			dispatch({ type: 'SET_USER', payload: response.user });
		});
	} else {
		res.json().then((res) => alert(res.errors));
	}
}
export const getPosts = (signId) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/signs/${signId}/posts`)
			.then((res) => res.json())
			.then((posts) => dispatch({ type: 'GET_POSTS', payload: posts }));
};

export const getPost = (id) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/posts/${id}`)
			.then((res) => res.json())
			.then((post) => dispatch({ type: 'GET_POST', payload: post }));
};
export const getUsers = () => {
	return (dispatch) =>
		fetch('http://localhost:3000/users')
			.then((res) => res.json())
			.then((users) => dispatch({ type: 'GET_USERS', payload: users }));
};
