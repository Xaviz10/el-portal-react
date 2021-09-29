import { useRef } from "react";

const useCarousel = () => {
	const refScroll = useRef();
	const scroll = (scrollOffset) => {
		refScroll.current.scrollLeft += scrollOffset;
	};

	return {
		refScroll,
		scroll,
	};
};

export default useCarousel;
