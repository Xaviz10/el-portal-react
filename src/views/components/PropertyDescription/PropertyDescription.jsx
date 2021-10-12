import React, { Suspense } from "react";
import useComponents from "..";
import "../../../assets/styles/components/PropertyDescription.scss";
import useControllers from "../../../controllers";
import useHelpers from "../../../helpers";

const PropertyDescription = () => {
	//Components
	const { GallerySlider } = useComponents();

	//Controllers
	const { useComponentsHooks } = useControllers();
	const { usePropertyDescription } = useComponentsHooks();
	const { property } = usePropertyDescription();

	//Quick Functions
	const { useQuickFunctions } = useHelpers();
	const { formatterCurrency } = useQuickFunctions();

	//Variables
	const { title, price, code, type, details, complements, description, images } = property;

	return (
		<section className="main-property-description-container">
			<GallerySlider imagesArray={images} />

			<div className="property-description-footer">
				<h3 className="property-description-footer__title">{`${title}`}</h3>
				<div className="property-description-footer__details">
					<div className="details__price">
						<h4>{`${formatterCurrency.format(price)}`}</h4>
						<span>{`${type}`}</span>
					</div>
					<div className="details__code">
						<h4>{`${code}`}</h4>
						<span>Código</span>
					</div>
					<div className="details__area">
						<span></span>
						<p>
							{`${details.area}`} m<sup>2</sup>
						</p>
					</div>
					<div className="details__rooms">
						<span></span>
						<p>{`${details.rooms}`} habs. </p>
					</div>
					<div className="details__baths">
						<span></span>
						<p>{`${details.bathrooms}`} b.</p>
					</div>

					<div className="details__parking">
						<span></span>
						<p>{`${details.parking}`} p.</p>
					</div>
				</div>

				<div className="property-description-footer__complement">
					<div className="property-description-complement complement__area-price">
						<span></span>
						<h4>{`${formatterCurrency.format(Math.round(price / details.area, -1))}`}</h4>
						<p>
							Valor / m<sup>2</sup>
						</p>
					</div>
					<div className="property-description-complement complement__administration">
						<span></span>
						<h4>{`${formatterCurrency.format(details.adminValue)}`}</h4>
						<p>Administración</p>
					</div>
					<div className="property-description-complement complement__year">
						<span></span>
						<h4>{`${details.year}`}</h4>
						<p>Año de construcción</p>
					</div>

					<div className="property-description-complement complement__status-level">
						<span></span>
						<h4>{`${details.statusLevel}`}</h4>
						<p>Estrato</p>
					</div>

					<div className="property-description-complement complement__flat">
						<span></span>
						<h4>{`${details.flat}`}</h4>
						<p>Piso</p>
					</div>

					<div className="property-description-complement complement__subsidy">
						<span></span>
						<h4>{details.subsidy ? "Apto" : "No Apto"}</h4>
						<p>Subsidio gobierno</p>
					</div>
				</div>
			</div>
			<div className="property-description-characteristics">
				<p className="property-description-characteristics__title">Características</p>
				<ul className="property-description-characteristics__list">
					{complements.privateTerrace ? <li>Terraza privada</li> : null}
					{complements.livingRoomTv ? <li>Estar TV</li> : null}
					{complements.study ? <li>Estudio</li> : null}
					{complements.greenAreas ? <li>Zonas verdes</li> : null}
					{complements.gym ? <li>Gimnasio</li> : null}
					{complements.jacuzzi ? <li>Jacuzzi</li> : null}
					{complements.childishArea ? <li>Zona infantil</li> : null}
					{complements.clothesZone ? <li>Zona de ropas</li> : null}
					{complements.integralKitchen ? <li>Cocina integral</li> : null}
					{complements.deposit ? <li>Terraza privada</li> : null}
					{complements.elevator ? <li>Ascensor</li> : null}
					{complements.serviceRoom ? <li>Cuarto servicio</li> : null}
					{complements.communalLiving ? <li>Salón comunal</li> : null}
					{complements.privateSecurity ? <li>Seguridad priv.</li> : null}
				</ul>

				<article className="property-description-characteristcs__description">
					<p className="description__title"> {`${description.titleDescription}`}</p>
					<p className="description__detailed">{`${description.detailedDescription}`}</p>
				</article>
			</div>

			<div className="property-description-map-contact-container">
				{/* <iframe className="property__map" src="" frameborder="0"> </iframe> */}
				<div className="property__map"> </div>

				<p className="property-description-map-contact__title">
					Estoy interesado, quiero ser contactado
				</p>

				<form className="property__form-contact" action="">
					<label htmlFor="name">
						<input type="text" id="name" autoComplete="name" placeholder="Nombre" />
					</label>

					<label htmlFor="tel">
						<input type="tel" id="tel" autoComplete="tel" placeholder="Teléfono" />
					</label>

					<label htmlFor="email">
						<input type="email" id="email" autoComplete="email" placeholder="Correo Electrónico" />
					</label>

					<input className="form-contact__button" type="submit" value="Enviar" />
				</form>
			</div>
		</section>
	);
};

export default PropertyDescription;
