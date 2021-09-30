//This can be done with location hook and the url

const useHeaderActions = () => {
	const actSetHeaderHome = () => (dispatch) => {
		dispatch({
			type: "SET_HEADER_HOME",
		});
	};
	return {
		actSetHeaderHome,
	};
};

export default useHeaderActions;
