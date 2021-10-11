import useStrings from "../../../strings";

const usePropertiesActions = () => {
	const { useTypes } = useStrings();
	const { usePropertiesTypes } = useTypes();
	const { GET_FEATURED_PROPERTIES, SET_PROPERTY_TO_SHOW } = usePropertiesTypes();

	const actGetFeaturedProperties = () => (dispatch) => {
		dispatch({
			type: GET_FEATURED_PROPERTIES,
		});
	};

	const actSetPropertyToShow =
		({ property }, onSuccess) =>
		(dispatch) => {
			dispatch({
				type: SET_PROPERTY_TO_SHOW,
				payload: property,
			});
			onSuccess && onSuccess();
		};
	return {
		actGetFeaturedProperties,
		actSetPropertyToShow,
	};
};

export default usePropertiesActions;
