const initialSign = {
	name: '',
	imageUrl: '',
	id: null,
	posts: [],
};
const initialUser = {
	username: '',
};
const initialPost = {
	post: null,
};

const initialState = {
	signs: [],
	posts: [],
	users: [],
	selectedSign: initialSign,
	user: initialUser,
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
		case 'SET_USER':
			return { ...state, user: action.payload };
		case 'GET_USERS':
			return { ...state, users: action.payload };
		case 'GET_POSTS':
			return { ...state, posts: action.payload };
		case 'GET_POST':
			return { ...state, selectedPost: action.payload };
		case 'CLEAR_POST':
			return { ...state, selectedPost: initialPost };
		case 'ADD_POST':
			return {
				...state,
				selectedSign: {
					...state.selectedSign,
					posts: [action.payload, ...state.selectedSign.posts],
				},
			};
		case 'LOGOUT':
			return { ...state, user: initialUser };

		default:
			return { ...state };
	}
}
