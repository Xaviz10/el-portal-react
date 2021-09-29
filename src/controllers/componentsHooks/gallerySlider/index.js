import { useState } from "react";

const useGallerySlider = () => {
	//current state and the functions that updates
	const [current, setCurrent] = useState(0);
	const length = imagesArray ? imagesArray.length : 0;

	//Functions for the slides management
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return {
		current,
		nextSlide,
		prevSlide,
	};
};

export default useGallerySlider;
