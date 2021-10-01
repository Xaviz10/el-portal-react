import React, { Suspense } from "react";
import useControllers from "../../../controllers";
import useComponents from "../../components";
import _ from "lodash";

const Home = () => {
	// Components & Skeleton
	const { SearchContainer, Carousel, PropertyCard, CallToAction, FindOutCard } = useComponents();

	//Controllers
	const { useScreensHooks } = useControllers();
	const { useHome } = useScreensHooks();
	const { featuredPropertiesToShow, findOutCardsToShow } = useHome();

	return (
		<>
			<SearchContainer />
			<Suspense fallback={<div>Loading... </div>}>
				<Carousel>
					{_.map(featuredPropertiesToShow, (property) => {
						return (
							<PropertyCard
								key={property.code}
								title={property.title}
								price={property.price}
								code={property.code}
								type={property.type}
								details={property.details}
								images={property.images}
							/>
						);
					})}
				</Carousel>
			</Suspense>
			<CallToAction />
			<Suspense fallback={<div>Loading... </div>}>
				<Carousel>
					{_.map(findOutCardsToShow, (findOutCard) => {
						const { id, cardImg, description, redirectTo, buttonName } = findOutCard;
						return (
							<FindOutCard
								key={id}
								cardImg={cardImg}
								description={description}
								redirectTo={redirectTo}
								buttonName={buttonName}
							/>
						);
					})}
				</Carousel>
			</Suspense>
			{/* <Carousel>
				<FindOutCard />
			</Carousel> */}
		</>
	);
};

export default Home;
