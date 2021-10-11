import useHelpers from "../../../helpers";
import useStrings from "../../../strings";
import useIntialStates from "../../initialStates";

const usePropertiesReducers = () => {
	//Helpers
	const { useCreateReducer } = useHelpers();
	const { createReducer } = useCreateReducer();

	const { useTypes } = useStrings();
	const { usePropertiesTypes } = useTypes();
	const { GET_FEATURED_PROPERTIES, SET_PROPERTY_TO_SHOW } = usePropertiesTypes();

	//InitalStates
	const { usePropertiesInitialStates } = useIntialStates();
	const { featuredPropertiesInitialState, propertyToShowInitialState } =
		usePropertiesInitialStates();

	const featuredProperties = createReducer(featuredPropertiesInitialState, {
		[GET_FEATURED_PROPERTIES](state, action) {
			return {
				...state,
				...action.payload,
			};
		},
	});

	const propertyToShow = createReducer(propertyToShowInitialState, {
		[SET_PROPERTY_TO_SHOW](state, action) {
			return {
				...state,
			};
		},
	});
	return { featuredProperties };
};

export default usePropertiesReducers;
