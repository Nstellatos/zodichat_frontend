const initialSign = {
	name: '',
	imageUrl: '',
	id: null,
	posts: [],
};
const initialUser = {
	username: '',
};
const initialState = {
	signs: [],
	selectedSign: initialSign,
	user: initialUser,
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
