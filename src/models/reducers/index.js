import { combineReducers } from "redux";
import usePropertiesReducers from "./properties";

const useReducers = () => {
	const { featuredProperties } = usePropertiesReducers();
	return combineReducers({
		featuredProperties,
	});
};

export default useReducers;
