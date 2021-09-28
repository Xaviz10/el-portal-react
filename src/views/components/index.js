import { lazy } from "react";

const CallToAction = lazy(() => import("./CallToAction"));
const Carousel = lazy(() => import("./Carousel"));
const FindOutCard = lazy(() => import("./FindOutCard"));
const Footer = lazy(() => import("./Footer"));
const GallerySlider = lazy(() => import("./GallerySlider"));
const Header = lazy(() => import("./Header"));
const NewPropertyForm = lazy(() => import("./NewPropertyForm"));
const PropertyCard = lazy(() => import("./PropertyCard"));
const PropertyDescription = lazy(() => import("./PropertyDescription"));
const SearchContainer = lazy(() => import("./SearchContainer"));

const useComponents = () => {
	return {
		CallToAction,
		Carousel,
		FindOutCard,
		Footer,
		GallerySlider,
		Header,
		NewPropertyForm,
		PropertyCard,
		PropertyDescription,
		SearchContainer,
	};
};

export default useComponents;
