import useCarousel from "./carousel";
import useGallerySlider from "./gallerySlider";
import useHeader from "./header";
import usePropertyCard from "./PropertyCard";
import usePropertyDescription from "./PropertyDescription";
const useComponentsHooks = () => {
	return {
		useCarousel,
		useGallerySlider,
		useHeader,
		usePropertyCard,
		usePropertyDescription,
	};
};

export default useComponentsHooks;
