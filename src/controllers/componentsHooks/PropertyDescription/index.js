import useModels from "../../../models";

const usePropertyDescription = () => {
	const { useSelectors } = useModels();
	const { useSelector, usePropertiesSelectors } = useSelectors();
	const { propertyToShowSelector } = usePropertiesSelectors();
	const property = useSelector(propertyToShowSelector);
	return {
		property,
	};
};

export default usePropertyDescription;
