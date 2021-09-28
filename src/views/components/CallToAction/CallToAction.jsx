import React from "react";
import "../assets/styles/components/CallToAction.scss";
import callToActionBackgroundImg from "../assets/static/img/call-to-action-img.jpg";

const CallToAction = () => {
	return (
		<section
			className="main-call-to-action-container"
			style={{ backgroundImage: `url(${callToActionBackgroundImg})` }}
		>
			<h3 className="call-to-action__question">
				¿Tienes un inmueble que necesitas vender, arrendar o empeñar?
			</h3>
			<a href="#" className="call-to-action__contacts">
				<span>Contáctanos</span>
			</a>
			<p className="call-to-action__img-autor">Mattia Astorino</p>
		</section>
	);
};

export default CallToAction;
