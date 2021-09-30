import React, { useState } from "react";
import "../../../assets/styles/components/GallerySlider.scss";
import useControllers from "../../../controllers";

const GallerySlider = ({ imagesArray }) => {
	//Controllers
	const { useComponentsHooks } = useControllers();
	const { useGallerySlider } = useComponentsHooks();
	const { current, nextSlide, prevSlide } = useGallerySlider();

	return (
		<div className="gallery-slider-container">
			<div className="left-arrow" onClick={prevSlide}>
				<span></span>
			</div>
			<div className="gallery-slider">
				{imagesArray.map((slide, index) => {
					return (
						//create a div for the active and inactive slide
						<div className={index === current ? "slide--active" : "slide--innactive"} key={index}>
							{index === current && <img className="photos-slider__image" src={slide} />}
						</div>
					);
				})}
			</div>
			<div className="right-arrow" onClick={nextSlide}>
				<span></span>
			</div>
		</div>
	);
};

export default GallerySlider;
