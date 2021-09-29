import usePropertiesReducers from "./properties";

const useReducers = () => {
	const { featuredProperties } = usePropertiesReducers();
	return {
		featuredProperties,
	};
};

export default useReducers;
