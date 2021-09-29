import classNames from "classnames";
import { navbarMenuData } from "./navbarMenuData.js";

const useHeader = () => {
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
	return {
		navbarMenuData,
		currentHeaderClass,
		headerIcons,
	};
};

export default useHeader;
