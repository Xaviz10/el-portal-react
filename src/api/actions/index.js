import useFormNewPropertyActions from "./formNewProperty";
import useHeaderActions from "./header";
import usePropertiesActions from "./properties";
const useActions = () => {
    return {
        usePropertiesActions,
        useHeaderActions,
        useFormNewPropertyActions,
    }
}

export default useActions;