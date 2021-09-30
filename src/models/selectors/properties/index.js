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
	return { feturedPropertiesSelector };
};

export default usePropertiesSelectors;
