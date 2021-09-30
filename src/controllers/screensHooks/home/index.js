import { useEffect, useState } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useHome = () => {
	//Api
	const { useActions } = useApi();
	const { dispatch, usePropertiesActions } = useActions();
	const { actSetFeaturedProperties } = usePropertiesActions();

	//Models
	const { useSelectors } = useModels();
	const { useSelector, usePropertiesSelectors } = useSelectors();
	const { feturedPropertiesSelector } = usePropertiesSelectors();
	const featuredProperties = useSelector(feturedPropertiesSelector);

	//States
	const [featuredPropertiesToShow, setFeaturedPropertiesToShow] = useState([]);

	//Get featured properties
	useEffect(() => {
		dispatch(actSetFeaturedProperties());
	}, []);

	//Set featured properties to showing
	useEffect(() => {
		setFeaturedPropertiesToShow(featuredProperties);
	}, [featuredProperties]);

	return {
		featuredPropertiesToShow,
	};
};

export default useHome;
