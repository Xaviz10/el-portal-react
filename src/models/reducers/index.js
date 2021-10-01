import { combineReducers } from "redux";
import useFindOutCardsReducers from "./findOutCards";
import usePropertiesReducers from "./properties";
const useReducers = () => {
	const { findOutCards } = useFindOutCardsReducers();
	const { featuredProperties } = usePropertiesReducers();
	return combineReducers({
		featuredProperties,
		findOutCards,
	});
};

export default useReducers;
