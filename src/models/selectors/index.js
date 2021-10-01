import { useSelector } from "react-redux";
import useFindOutCardsSelectors from "./findOutCards";
import usePropertiesSelectors from "./properties";
const useSelectors = () => {
	return {
		useSelector,
		usePropertiesSelectors,
		useFindOutCardsSelectors,
	};
};

export default useSelectors;
