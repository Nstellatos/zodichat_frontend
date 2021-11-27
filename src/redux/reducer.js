const initialState = {
	posts: [],
	selectedPost: {
		imageUrl: '',
		title: '',
		description: '',
	},
};
export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_POSTS':
			return { ...state, posts: action.payload };
		case 'GET_POST':
			return { ...state, selectedPost: action.payload };

		default:
			return { ...state };
	}
}
