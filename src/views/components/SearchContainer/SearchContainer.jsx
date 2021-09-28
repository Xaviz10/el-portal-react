import "../../../assets/styles/components/SearchContainer.scss";
import searchContainerImg from "../../../assets/static/img/search-portal-img.jpg";
import searchIcon from "../../../assets/static/icons/search-icon.svg";

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
					<input
						type="search"
						ref={searchBarRef}
						onChange={handleKeywordSearch}
						placeholder="Busca por código, zona, barrio..."
					/>
				</label>
				<label className="search-rooms">
					<select name="" id="" ref={roomsNumberRef} onChange={handleKeywordSearch}>
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
					<select name="" id="" ref={typeRef} onChange={handleKeywordSearch}>
						<option defaultValue value="none">
							Tipo
						</option>
						<option>Venta</option>
						<option>Arriendo</option>
					</select>
				</label>
				<Link to={`/search/${searchFilter}`} className="search-redirect-link">
					<button className="search-button">Buscar</button>
				</Link>
			</form>
		</section>
	);
};

export default SearchContainer;
