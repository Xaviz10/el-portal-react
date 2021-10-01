import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useIntialStates from "../../initialStates";

const useFindOutCardsReducers = () => {
	//Helpers
	const { useCreateReducer } = useHelpers();
	const { createReducer } = useCreateReducer();

	const { useTypes } = useStrings();
	const { GET_FIND_OUT_CARDS } = useTypes();

	//InitalStates
	const { useFindOutCardsInitialStates } = useIntialStates();
	const { findOutCardsInitialStates } = useFindOutCardsInitialStates();

	const findOutCards = createReducer(findOutCardsInitialStates, {
		[GET_FIND_OUT_CARDS](state) {
			return {
				...state,
			};
		},
	});

	return { findOutCards };
};

export default useFindOutCardsReducers;
