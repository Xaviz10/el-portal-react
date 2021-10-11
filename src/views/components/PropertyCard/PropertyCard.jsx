import React from "react";
import "../../../assets/styles/components/PropertyCard.scss";
import useControllers from "../../../controllers";
import useHelpers from "../../../helpers";

const PropertyCard = ({ property }) => {
	const { title, price, code, type, details, images } = property;

	const { useComponentsHooks } = useControllers();
	const { usePropertyCard } = useComponentsHooks();
	const { handleShowProperty } = usePropertyCard({ property });

	const { useQuickFunctions } = useHelpers();
	const { formatterCurrency } = useQuickFunctions();
	return (
		<article
			className="main-property-card-container"
			style={{ backgroundImage: `url(${images[0]})` }}
			onClick={handleShowProperty}
		>
			<div className="property-card-footer">
				<p className="property-card-footer__title">
					{`${title}`}
					<span>{`${code}`}</span>
				</p>
				<div className="property-card-footer__details-preview">
					<div className="details-preview__area">
						<span></span>
						<p>
							{`${details.area}`} m<sup>2</sup>
						</p>
					</div>
					<div className="details-preview__rooms">
						<span></span>
						<p>{`${details.rooms}`} habs. </p>
					</div>
					<div className="details-preview__baths">
						<span></span>
						<p>{`${details.bathrooms}`} b.</p>
					</div>
					<div className="details-preview__price">
						<p>{`${formatterCurrency.format(price)}`}</p>
						<span>{`${type}`}</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export default PropertyCard;
