import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../src-old/components/Layout";
import NotFound from "../src-old/container/NotFound";
import Home from "../src-old/container/Home";
import PropertyDescriptionContainer from "../src-old/container/PropertyDescriptionContainer";
import PropertyResultContainer from "../src-old/container/PropertyResultContainer";
import NewPropertyFormContainer from "../src-old/container/NewPropertyFormContainer";

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/property/:code" component={PropertyDescriptionContainer} />
					<Route exact path="/search/:filter" component={PropertyResultContainer} />
					<Route exact path="/search/:filter" component={PropertyResultContainer} />
					<Route exact path="/publicar/" component={NewPropertyFormContainer} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
