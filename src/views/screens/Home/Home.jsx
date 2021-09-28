import useComponents from "../../components";

const Home = () => {
	// Components & Skeleton
	const { SearchContainer, Carousel, PropertyCard, CallToAction, FindOutCard } = useComponents();
	return (
		<>
			<SearchContainer />
			<Carousel />
			<CallToAction />
			<Carousel />
		</>
	);
};

export default Home;
