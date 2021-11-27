export const getPosts = () => {
	return (dispatch) =>
		fetch('http://localhost:3000/posts')
			.then((res) => res.json())
			.then((posts) => dispatch({ type: 'GET_POSTS', payload: posts }));
};
export const getPost = (id) => {
	return (dispatch) =>
		fetch(`http://localhost:3000/posts/${id}`)
			.then((res) => res.json())
			.then((post) => dispatch({ type: 'GET_POST', payload: post }));
};
