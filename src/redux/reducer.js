const initialSign = {
	name: '',
	imageUrl: '',
	id: null,
	posts: [],
};
const initialPost = {
	title: '',
	imageUrl: '',
	description: '',
	id: null,
};

const initialState = {
	signs: [],
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
		case 'GET_POST':
			return { ...state, selectedPost: action.payload };

		default:
			return { ...state };
	}
}
