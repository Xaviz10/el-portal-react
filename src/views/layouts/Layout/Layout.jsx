import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useComponents from "../../components";
useComponents;
const Layout = ({ children }) => {
	const { Header, Footer } = useComponents();
	return (
		<div className="App">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
