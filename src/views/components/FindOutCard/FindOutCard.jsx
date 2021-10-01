import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/styles/components/FindOutCard.scss";

const FindOutCard = ({ cardImg, description, buttonName, redirectTo }) => {
	return (
		<article
			className="find-out-cards__recommendation"
			style={{ backgroundImage: `url(${cardImg})` }}
		>
			<h3 className="recommendation__description">{description}</h3>
			<Link to={redirectTo} className="recommendation__call-to-action">
				{buttonName}
			</Link>
		</article>
	);
};

export default FindOutCard;
