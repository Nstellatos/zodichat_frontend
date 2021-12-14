const initialSign = {
	name: '',
	imageUrl: '',
	id: null,
};
const initialPost = {
	title: '',
	imageUrl: '',
	description: '',
	id: null,
};

const initialState = {
	signs: [],
	posts: [],
	selectedSign: initialSign,
	selectedPost: initialPost,
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_SIGNS':
			return { ...state, signs: action.payload };
		case 'GET_SIGN':
			return { ...state, selectedSign: action.payload };
		case 'CLEAR_SIGN':
			return { ...state, selectedSign: initialSign };
		case 'GET_POSTS':
			return { ...state, posts: action.payload };
		case 'GET_POST':
			return { ...state, selectedPost: action.payload };
		case 'ADD_POST':
			return { ...state, initialPost: action.payload };

		default:
			return { ...state };
	}
}
