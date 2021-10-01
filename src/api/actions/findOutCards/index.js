import useStrings from "../../../strings";

const useFindOutCardsActions = () => {
	const { useTypes } = useStrings();
	const { useFindOutCardsTypes } = useTypes();
	const { GET_FIND_OUT_CARDS } = useFindOutCardsTypes();

	const actGetFindOutCards = () => (dispatch) => {
		dispatch({
			type: GET_FIND_OUT_CARDS,
		});
	};

	return {
		actGetFindOutCards,
	};
};

export default useFindOutCardsActions;
