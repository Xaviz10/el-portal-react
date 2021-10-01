import { useEffect, useState } from "react";
import useApi from "../../../api";
import useModels from "../../../models";

const useHome = () => {
	//Api
	const { useActions } = useApi();
	const { dispatch, usePropertiesActions, useFindOutCardsActions } = useActions();
	const { actGetFeaturedProperties } = usePropertiesActions();
	const { actGetFindOutCards } = useFindOutCardsActions();

	//Models
	const { useSelectors } = useModels();
	const { useSelector, usePropertiesSelectors, useFindOutCardsSelectors } = useSelectors();
	const { feturedPropertiesSelector } = usePropertiesSelectors();
	const { findOutCardsSelector } = useFindOutCardsSelectors();
	const featuredProperties = useSelector(feturedPropertiesSelector);
	const findOutCards = useSelector(findOutCardsSelector);
	console.log({ findOutCards });

	//States
	const [featuredPropertiesToShow, setFeaturedPropertiesToShow] = useState([]);
	const [findOutCardsToShow, setFindOutCardsToShow] = useState([]);

	//Get featured properties
	useEffect(() => {
		dispatch(actGetFeaturedProperties());
		dispatch(actGetFindOutCards());
	}, []);

	//Set featured properties to showing
	useEffect(() => {
		setFeaturedPropertiesToShow(featuredProperties);
		setFindOutCardsToShow(findOutCards);
	}, [featuredProperties[0], findOutCards[0]]);

	return {
		featuredPropertiesToShow,
		findOutCardsToShow,
	};
};

export default useHome;
