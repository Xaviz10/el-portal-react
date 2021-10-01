import useFindOutCardsTypes from "./findOutCards";
import useFormNewPropertyTypes from "./formNewProperty";
import usePropertiesTypes from "./properties";
const useTypes = () => {
	return {
		useFindOutCardsTypes,
		useFormNewPropertyTypes,
		usePropertiesTypes,
	};
};

export default useTypes;
