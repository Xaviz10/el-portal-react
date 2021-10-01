import useStrings from "../../../strings";

const usePropertiesActions = () => {
	const { useTypes } = useStrings();
	const { usePropertiesTypes } = useTypes();
	const { GET_FEATURED_PROPERTIES } = usePropertiesTypes();
	const actGetFeaturedProperties = () => (dispatch) => {
		dispatch({
			type: GET_FEATURED_PROPERTIES,
		});
	};

	return {
		actGetFeaturedProperties,
	};
};

export default usePropertiesActions;
