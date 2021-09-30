import "../../../assets/styles/components/SearchContainer.scss";
import searchContainerImg from "../../../assets/static/img/search-portal-img.jpg";
import searchIcon from "../../../assets/static/icons/search-icon.svg";
import { Link } from "react-router-dom";

const SearchContainer = () => {
	return (
		<section
			className="main-search-container"
			style={{ backgroundImage: `url(${searchContainerImg})` }}
		>
			<h2 className="main-search__title">¿Que inmueble deseas?</h2>

			<form className="search__form" action="">
				<label className="search-keyword">
					<span style={{ backgroundImage: `url(${searchIcon})` }}></span>
					<input type="search" placeholder="Busca por código, zona, barrio..." />
				</label>
				<label className="search-rooms">
					<select name="" id="">
						<option defaultValue value="none">
							Habitaciones
						</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>+4</option>
					</select>
				</label>
				<label className="search-type">
					<select name="" id="">
						<option defaultValue value="none">
							Tipo
						</option>
						<option>Venta</option>
						<option>Arriendo</option>
					</select>
				</label>
				<button className="search-button">Buscar</button>
			</form>
		</section>
	);
};

export default SearchContainer;
