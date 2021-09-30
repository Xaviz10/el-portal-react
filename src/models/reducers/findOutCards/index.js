import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useIntialStates from "../../initialStates";

const useFindOutCardsReducers = () => {
	//Helpers
	const { useCreateReducer } = useHelpers();
	const { createReducer } = useCreateReducer();

	const { useTypes } = useStrings();
	const { GET_FEATURED_PROPERTIES } = useTypes();

	//InitalStates
	const { usePropertiesInitialStates } = useIntialStates();
	const { useFindOutCardsInitialStates } = usePropertiesInitialStates();

	return {};
};

export default useFindOutCardsReducers;
