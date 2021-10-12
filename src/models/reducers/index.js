import { combineReducers } from "redux";
import useFindOutCardsReducers from "./findOutCards";
import usePropertiesReducers from "./properties";
const useReducers = () => {
	const { findOutCards } = useFindOutCardsReducers();
	const { featuredProperties, propertyToShow } = usePropertiesReducers();
	return combineReducers({
		findOutCards,
		featuredProperties,
		propertyToShow,
	});
};

export default useReducers;
