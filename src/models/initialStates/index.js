import useFindOutCardsInitialStates from "./findOutCards";
import usePropertiesInitialStates from "./properties";
const useIntialStates = () => {
	return {
		usePropertiesInitialStates,
		useFindOutCardsInitialStates,
	};
};

export default useIntialStates;
