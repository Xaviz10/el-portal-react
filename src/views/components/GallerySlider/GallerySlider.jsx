import React, { useState } from "react";
import Carousel from "react-gallery-carousel";
import "../../../assets/styles/components/GallerySlider.scss";
import "react-gallery-carousel/dist/index.css";
import useControllers from "../../../controllers";

const GallerySlider = () => {
	//Controllers
	const { useComponentsHooks } = useControllers();
	const { useGallerySlider } = useComponentsHooks();
	const { imagesToGallery, inLineStyle, leftArrowIcon, rightArrowIcon } = useGallerySlider();

	return (
		<Carousel
			images={imagesToGallery}
			style={inLineStyle}
			shouldMaximizeOnClick={true}
			hasMediaButton={false}
			hasIndexBoard={"bottomRight"}
			widgetsHasShadow={true}
			// leftIcon={<img src={leftArrowIcon} style={{ width: 40 }} />}
			// rightIcon={<img src={rightArrowIcon} style={{ width: 40 }} />}
			// thumbnailWidth={"20%"}
		/>
		// <div className="gallery-slider-container">
		// 	{/* <div className="left-arrow" onClick={prevSlide}>
		// 		<span></span>
		// 	</div>
		// 	<div className="gallery-slider">
		// 		{imagesArray.map((slide, index) => {
		// 			return (
		// 				//create a div for the active and inactive slide
		// 				<div className={index === current ? "slide--active" : "slide--innactive"} key={index}>
		// 					{index === current && <img className="photos-slider__image" src={slide} />}
		// 				</div>
		// 			);
		// 		})}
		// 	</div>
		// 	<div className="right-arrow" onClick={nextSlide}>
		// 		<span></span>
		// 	</div> */}
		// </div>
	);
};

export default GallerySlider;
