import useModels from "../../../models";
import leftArrowIcon from "../../../assets/static/icons/left-arrow-icon.svg";
import rightArrowIcon from "../../../assets/static/icons/right-arrow-icon.svg";

const useGallerySlider = () => {
	const { useSelectors } = useModels();
	const { useSelector, usePropertiesSelectors } = useSelectors();
	const { propertyToShowSelector } = usePropertiesSelectors();
	const { images } = useSelector(propertyToShowSelector);

	const imagesToGallery = images.map((image) => ({
		src: image,
	}));

	const inLineStyle = {
		position: "relative",
		width: "100%",
		minWidth: "400px",
		maxWidth: "1000px",
		height: "65vh",
	};

	return {
		images,
		imagesToGallery,
		inLineStyle,
		leftArrowIcon,
		rightArrowIcon,
	};
};

export default useGallerySlider;
