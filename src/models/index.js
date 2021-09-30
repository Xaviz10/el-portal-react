import useIntialStates from "./initialStates";
import useReducers from "./reducers";
import useSelectors from "./selectors";
const useModels = () => {
	return {
		useIntialStates,
		useReducers,
		useSelectors,
	};
};

export default useModels;
