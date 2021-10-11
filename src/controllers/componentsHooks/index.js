import useCarousel from "./carousel";
import useGallerySlider from "./gallerySlider";
import useHeader from "./header";
import usePropertyCard from "./PropertyCard";
const useComponentsHooks = () => {
	return {
		useCarousel,
		useGallerySlider,
		useHeader,
		usePropertyCard,
	};
};

export default useComponentsHooks;
