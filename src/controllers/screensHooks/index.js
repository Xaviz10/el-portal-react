import useHome from "./home";
import useProperty from "./property";
const useScreensHooks = () => {
	return {
		useHome,
		useProperty,
	};
};

export default useScreensHooks;
