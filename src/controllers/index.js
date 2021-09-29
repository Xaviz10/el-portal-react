import useComponentsHooks from "./componentsHooks";
import useGeneralHooks from "./generalHooks";
import useLayoutHooks from "./layoutHooks";
import useScreensHooks from "./screensHooks";
const useControllers = () => {
	return {
		useComponentsHooks,
		useGeneralHooks,
		useLayoutHooks,
		useScreensHooks,
	};
};

export default useControllers;
