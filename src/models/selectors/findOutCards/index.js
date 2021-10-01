import useHelpers from "../../../helpers";

const useFindOutCardsSelectors = () => {
	//Helpers
	const { useCreateSelector } = useHelpers();
	const { createSelector } = useCreateSelector();

	const findOutCardsSelector = createSelector(
		(state) => state.findOutCards,
		(findOutCards) => {
			return {
				...findOutCards,
			};
		},
	);

	return { findOutCardsSelector };
};

export default useFindOutCardsSelectors;
