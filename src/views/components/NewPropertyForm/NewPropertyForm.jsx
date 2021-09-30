import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
// import { setHeaderHome, setImagePreviewUpload } from "../../../api/actions";
import "../../../assets/styles/components/NewPropertyForm.scss";

const NewPropertyForm = () => {
	const dispatch = useDispatch();
	const imagesPreview = useSelector((state) => state.preview_images_form);
	const { register, handleSubmit } = useForm();

	console.log(Boolean(imagesPreview.length));

	// useEffect(() => {
	// 	dispatch(setHeaderHome(false));
	// }, []);

	// const handlePreviewNewImage = (event) => {
	// 	dispatch(
	// 		setImagePreviewUpload(URL.createObjectURL(event.target.files[0]), event.target.files[0]),
	// 	);
	// };

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className="form__new-property" onSubmit={handleSubmit(onSubmit)}>
			<div className="form__photos-slider-container">
				<div className="form__photos-slider">
					<div></div>

					{/* <!-- <input type="file" className="new-property__add-photos">
                            <span></span>
                        </input> --> */}
					{imagesPreview.length
						? imagesPreview.map((image) => {
								return <img className="photos-slider__image" src={image.preview}></img>;
						  })
						: null}

					<label htmlFor="file-input" className="photos-slider__button-add-photos">
						<span></span>
						<i> Adicionar imagen </i>
					</label>

					<input
						id="file-input"
						type="file"
						className="photos-slider__button-add-photos"
						style={{ display: "none" }}
						onChange={handlePreviewNewImage}
					/>

					{/* <!-- div only for make visible the entery button in the slider --> */}
					<div></div>
				</div>
			</div>

			<div className="form__property-details">
				<label className="new-property__detail-item new-property__title">
					<input type="text" id="title" name="title" placeholder="Título" />
				</label>

				<label className="new-property__detail-item new-property__price">
					<input type="text" id="price" name="price" placeholder="Precio" />
				</label>

				<label className="new-property__detail-item new-property__code">
					<input type="text" id="code" name="code" placeholder="Código" />
				</label>

				<label className="new-property__detail-item new-property__type">
					<select name="type" id="type" area="type">
						<option value="" disable selected>
							Tipo
						</option>
						<option value="venta">Venta</option>
						<option value="arriendo">Arriendo</option>
						<option value="empeño">Empeño</option>
					</select>
				</label>

				<p className="property-details__title">Detalles</p>

				<label className="new-property__detail-item new-property__area">
					<span></span>
					<input type="number" id="area" name="area" placeholder="Área" />
				</label>

				<label className="new-property__detail-item new-property__rooms">
					<span></span>
					<input type="number" id="rooms" name="rooms" placeholder="Habitaciones" />
					<button className="btn__up btn-rooms__up">+</button>
					<button className="btn__down btn-rooms__down">-</button>
				</label>

				<label className="new-property__detail-item new-property__bathrooms">
					<span></span>
					<input type="number" id="bathrooms" name="bathrooms" placeholder="Baños" />
					<button className="btn__up btn-bathrooms__up">+</button>
					<button className="btn__down btn-bathrooms__down">-</button>
				</label>

				<label className="new-property__detail-item new-property__parking">
					<span></span>
					<input type="number" id="parking" name="parking" placeholder="Parqueaderos" />
					<button className="btn__up btn-parking__up">+</button>
					<button className="btn__down btn-parking__up">-</button>
				</label>
				{/* <!-- </div>

                <div className="form__property-complements"> --> */}

				<label className="new-property__complement-item new-property__admin-value">
					<span></span>
					<input type="number" id="admin-value" name="admin-value" placeholder="Administración" />
				</label>

				<label className="new-property__complement-item new-property__year" for="year">
					<span></span>
					<input
						type="number"
						id="year"
						name="year"
						min="1900"
						max="2099"
						step="1"
						placeholder="Año de construcción"
					/>
				</label>

				<label className="new-property__complement-item new-property__status-level">
					<span></span>
					<input type="number" id="status-level" name="status-level" placeholder="Estrato" />
					<button className="btn__up btn-flat__up">+</button>
					<button className="btn__down btn-flat__up">-</button>
				</label>

				<label className="new-property__complement-item new-property__flat">
					<span></span>
					<input type="number" id="flat" name="flat" placeholder="Piso" />
					<button className="btn__up btn-flat__up">+</button>
					<button className="btn__down btn-flat__up">-</button>
				</label>

				<div className="new-property__subsidy">
					<input type="checkbox" id="subsidy" name="subsidy" />
					<label>Subsidio gobierno</label>
				</div>
			</div>

			<div className="form__property-aditional-characteristics">
				<p className="property-aditional-characteristics__title">Características</p>

				<div className="new-property__aditional-characteristics new-property__private-terrace">
					<input type="checkbox" id="private-terrace" name="private-terrace" />
					<label>Terraza privada</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__living-room-tv">
					<input type="checkbox" id="living-room-tv" name="living-room-tv" />
					<label>Estar TV</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__study">
					<input type="checkbox" id="study" name="study" />
					<label>Estudio</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__green-areas">
					<input type="checkbox" id="green-areas" name="green-areas" />
					<label>Zonad verdes</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__gym">
					<input type="checkbox" id="gym" name="gym" />
					<label>Gimnasio</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__jacuzzi">
					<input type="checkbox" id="jacuzzi" name="jacuzzi" />
					<label>Jacuzzi</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__childish-area">
					<input type="checkbox" id="childish-area" name="childish-area" />
					<label>Zona infantil</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__service-room">
					<input type="checkbox" id="service-room" name="service-room" />
					<label>Cuarto servicio</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__clothes-zone">
					<input type="checkbox" id="clothes-zone" name="clothes-zone" />
					<label>Zona de ropas</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__integral-kitchen">
					<input type="checkbox" id="integral-kitchen" name="integral-kitchen" />
					<label>Cocina integral</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__elevator">
					<input type="checkbox" id="elevator" name="integral-kitchen" />
					<label>Ascensor</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__deposit">
					<input type="checkbox" id="deposit" name="deposit" />
					<label>Depósito</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__communal-living">
					<input type="checkbox" id="communal-living" name="communal-living" />
					<label>Salón comunal</label>
				</div>

				<div className="new-property__aditional-characteristics new-property__private-security">
					<input type="checkbox" id="private-security" name="private-security" />
					<label>Seguridad priv.</label>
				</div>
			</div>

			<div className="form__property-description">
				<p className="property-description__title">Descripción</p>

				<label className="new-property__title-description">
					<textarea
						name="title-description"
						rows="3"
						placeholder="Agrega una descripciónn corta del inmueble"
					></textarea>
				</label>

				<label className="new-property__detailed-description">
					<textarea
						name="detailed-description"
						rows="10"
						placeholder="Agrega una descripción más detallada  del inmueble (establecimientos cercanos, parques, etc.)"
					></textarea>
				</label>

				<label className="new-property__location">
					<span></span>
					<input type="number" id="location" name="location" placeholder="Ubicación" />
				</label>

				<div className="new-property__map">
					<span></span>
				</div>
			</div>
			<div className="form__buttons-confirmation">
				<button className="form-button__save-property">Confirmar</button>
				<button className="form-button__cancel-property">Cancelar</button>
			</div>
		</form>
	);
};

export default NewPropertyForm;
