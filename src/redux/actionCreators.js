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

export const getPosts = () => {
	return (dispatch) =>
		fetch('http://localhost:3000/posts')
			.then((res) => res.json())
			.then((posts) => dispatch({ type: 'GET_POSTS', payload: posts }));
};

export const getPost = (id) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/signs/:sign_id/posts`)
			.then((res) => res.json())
			.then((post) => dispatch({ type: 'GET_POST', payload: post }));
};
export const submitPost = (post) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
