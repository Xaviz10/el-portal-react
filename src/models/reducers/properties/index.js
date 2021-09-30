import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useIntialStates from "../../initialStates";

const usePropertiesReducers = () => {
	//Helpers
	const { useCreateReducer } = useHelpers();
	const { createReducer } = useCreateReducer();

	const { useTypes } = useStrings();
	const { GET_FEATURED_PROPERTIES } = useTypes();
	//InitalStates
	const { usePropertiesInitialStates } = useIntialStates();
	const { featuredPropertiesInitialState } = usePropertiesInitialStates();

	const featuredProperties = createReducer(featuredPropertiesInitialState, {
		[GET_FEATURED_PROPERTIES](state) {
			return {
				...state,
			};
		},
	});
	return { featuredProperties };
};

export default usePropertiesReducers;
