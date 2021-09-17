import useCreateReducer from "./createReducer";
import useCreateSelector from "./createSelector";

const useUtils = () => {
    return {
        useCreateReducer,
        useCreateSelector,
    }
}

export default useUtils;