import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

import { navbarMenuData } from "../menus/navbarMenuData.js";

import classNames from "classnames"; // for join classnames
import headerElPortalWhiteIcon from "../assets/static/icons/icon-header-elportal--white.svg";
import headerElPortalBlackIcon from "../assets/static/icons/icon-header-elportal--black.svg";
import hamButtonBlack from "../assets/static/icons/ham-button--black.svg";
import hamButtonWhite from "../assets/static/icons/ham-button--white.svg";
import closeIcon from "../assets/static/icons/close-icon.svg";

const Header = () => {
	const isHome = useSelector((state) => state.home);

	const [currentHeaderClass, setHeaderClass] = useState(
		isHome ? classNames("header-container", "transparent") : "header-container",
	);
	const [headerIcons, setHeaderIcons] = useState(isHome ? true : false);
	const [sideNavbar, setSideNavbar] = useState({
		toggle: false,
		class: "header__menu--side-navbar",
	});

	useEffect(() => {
		navbarStatus();
	}, [isHome]);

	const navbarStatus = () => {
		if ((isHome && window.scrollY >= 80) || !isHome) {
			setHeaderIcons(false);
			setHeaderClass("header-container");
		} else if (isHome && window.scrollY < 80) {
			setHeaderIcons(true);
			setHeaderClass(classNames("header-container", "transparent"));
		}
	};

	const sideNavbarToggle = () => {
		if (!sideNavbar.toggle) {
			setSideNavbar({
				toggle: !sideNavbar.toggle,
				class: classNames("header__menu--side-navbar", "active"),
			});
		} else {
			setSideNavbar({ toggle: !sideNavbar.toggle, class: "header__menu--side-navbar" });
		}
	};

	window.addEventListener("scroll", navbarStatus);

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
