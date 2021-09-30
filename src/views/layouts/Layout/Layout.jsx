import React from "react";
import useComponents from "../../components";

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
