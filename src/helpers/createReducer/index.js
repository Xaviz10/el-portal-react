const useCreateReducer = () => {
	const createReducer = (initialState, handler) => {
		return function reducer(state = initialState, action) {
			if (handler?.hasOwnProperty(action.type)) {
				return handler[action.type](state, action);
			}
			return state;
		};
	};
	return {
		createReducer,
	};
};

export default useCreateReducer;
