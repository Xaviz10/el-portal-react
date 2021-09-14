import useFormActions from "./form";
import useHeaderActions from "./header";
import usePropertiesActions from "./properties";
const useActions = () => {
    return {
        usePropertiesActions,
        useHeaderActions,
        useFormActions,
    }
}

export default useActions;