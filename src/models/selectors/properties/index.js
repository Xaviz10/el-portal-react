import useHelpers from "../../../helpers";

const usePropertiesSelectors = () => {
	//helpers
	const { useCreateSelector } = useHelpers();
	const { createSelector } = useCreateSelector();

	const feturedPropertiesSelector = createSelector(
		(state) => state.featuredProperties,
		(featuredProperties) => {
			return {
				...featuredProperties,
			};
		},
	);

	const propertyToShowSelector = createSelector(
		(state) => state.propertyToShow,
		(propertyToShow) => {
			return {
				...propertyToShow,
			};
		},
	);
	return {
		feturedPropertiesSelector,
		propertyToShowSelector,
	};
};

export default usePropertiesSelectors;
