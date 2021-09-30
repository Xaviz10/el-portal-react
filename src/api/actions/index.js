import { useDispatch } from "react-redux";
import useFormNewPropertyActions from "./formNewProperty";
import useHeaderActions from "./header";
import usePropertiesActions from "./properties";
const useActions = () => {
	const dispatch = useDispatch();
	return {
		dispatch,
		useFormNewPropertyActions,
		useHeaderActions,
		usePropertiesActions,
	};
};

export default useActions;
