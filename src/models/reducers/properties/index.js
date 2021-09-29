import useHelpers from "../../../helpers";
import useIntialStates from "../../initialStates";

const usePropertiesReducers = () => {
	const { useCreateReducer } = useHelpers();
	const { createReducer } = useCreateReducer();

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
