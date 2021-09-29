import { useSelector } from "react-redux";
import usePropertiesSelectors from "./properties";

const useSelectors = () => {
	return {
		useSelector,
		usePropertiesSelectors,
	};
};

export default useSelectors;
