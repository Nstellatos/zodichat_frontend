const initialSign = {
	name: '',
	imageUrl: '',
	id: null,
	posts: [],
};

const initialState = {
	signs: [],
	selectedSign: initialSign,
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'GET_SIGNS':
			return { ...state, signs: action.payload };
		case 'GET_SIGN':
			return { ...state, selectedSign: action.payload };

		default:
			return { ...state };
	}
}
