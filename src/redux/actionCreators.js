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

export const getPost = (id) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/posts/${id}`)
			.then((res) => res.json())
			.then((post) => dispatch({ type: 'GET_POST', payload: post }));
};
