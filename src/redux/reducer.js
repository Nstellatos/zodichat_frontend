const initialState = {
	posts: [],
};
export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_POSTS':
			return { ...state, posts: action.payload };
		default:
			return { ...state };
	}
}
