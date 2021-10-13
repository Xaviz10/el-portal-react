import { useEffect } from "react";

const useProperty = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return {};
};

export default useProperty;
