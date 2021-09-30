import useStrings from "../../../strings";

const usePropertiesActions = () => {
	const { useTypes } = useStrings();
	const { usePropertiesTypes } = useTypes();
	const { GET_FEATURED_PROPERTIES } = usePropertiesTypes();
	const actSetFeaturedProperties = () => (dispatch) => {
		dispatch({
			type: GET_FEATURED_PROPERTIES,
		});
	};

	return {
		actSetFeaturedProperties,
	};
};

export default usePropertiesActions;
