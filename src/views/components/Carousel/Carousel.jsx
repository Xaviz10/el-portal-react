import React from "react";
import "../../../assets/styles/components/Carousel.scss";
import useControllers from "../../../controllers";

const Carousel = ({ children }) => {
	//Controllers
	const { useComponentsHooks } = useControllers();
	const { useCarousel } = useComponentsHooks();
	const { refScroll, scroll } = useCarousel();

	// //Models
	// const { useSelectors } = useModels();
	// const { useSelector, usePropertiesSelectors } = useSelectors();
	// const { feturedPropertiesSelector } = usePropertiesSelectors();
	// const { featuredProperties } = useSelector(featuredPropertiesSelector);

	return (
		<section className="main-carousel-container">
			<section className="carousel-cards-container">
				<div className="carousel-cards-inner-container" ref={refScroll}>
					<div className="left-scroll" onClick={() => scroll(-300)}>
						<span></span>
					</div>
					<div className="fake-card"></div>
					{children}
					<div className="fake-card"></div>
					<div className="right-scroll" onClick={() => scroll(300)}>
						<span></span>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Carousel;
