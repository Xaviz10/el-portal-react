import { createSelectorCreator, defaultMemoize } from "reselect";
import { isEqual } from "lodash";

/*
  useCreateSelector => HOOK
  - Beneficts of reselect library:
    1. Selectors can compute derived data, allowing Redux to store the minimal possible state.
    2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
    3. Selectors are composable. They can be used as input to other selectors.

  URL: https://www.npmjs.com/package/reselect
*/
const useCreateSelector = () => {
	const createSelector = createSelectorCreator(defaultMemoize, isEqual);

	return {
		createSelector,
	};
};

export default useCreateSelector;
