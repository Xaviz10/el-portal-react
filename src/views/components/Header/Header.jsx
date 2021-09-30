import React from "react";
import "../../../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

import headerElPortalWhiteIcon from "../../../assets/static/icons/icon-header-elportal--white.svg";
import headerElPortalBlackIcon from "../../../assets/static/icons/icon-header-elportal--black.svg";
import hamButtonBlack from "../../../assets/static/icons/ham-button--black.svg";
import hamButtonWhite from "../../../assets/static/icons/ham-button--white.svg";
import closeIcon from "../../../assets/static/icons/close-icon.svg";
import useControllers from "../../../controllers";

const Header = () => {
	const { useComponentsHooks } = useControllers();
	const { useHeader } = useComponentsHooks();
	const { navbarMenuData, currentHeaderClass, headerIcons, sideNavbar } = useHeader();
	return (
		<header className={currentHeaderClass}>
			<Link to="/" className="header__logo">
				<img
					src={headerIcons ? headerElPortalWhiteIcon : headerElPortalBlackIcon}
					alt="El Portal Logo"
				/>
			</Link>

			<Link to="#" className="menu__button--open" onClick={() => sideNavbarToggle()}>
				<span
					className="button--open"
					style={{ backgroundImage: `url(${headerIcons ? hamButtonWhite : hamButtonBlack})` }}
				></span>
			</Link>

			<nav className="header__menu--navbar">
				<ul className="menu__options">
					{navbarMenuData.map((element, index) => {
						return (
							<li key={index}>
								<Link to={element.path} className={element.cName}>
									{element.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>

			<nav className={sideNavbar.class}>
				<ul className="menu__options">
					<li>
						<Link to="#" className="menu__button--close" onClick={() => sideNavbarToggle()}>
							<span className="button--close" style={{ backgroundImage: `url(${closeIcon})` }}></span>
						</Link>
					</li>

					{navbarMenuData.map((element, index) => {
						return (
							<li key={index}>
								<Link to={element.path} className={element.cName}>
									<span style={{ backgroundImage: `url(${element.icon})` }}></span>
									{element.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
