import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";

import useConfig from "./config";
import useViews from "./views";

const App = () => {
	// Config
	const { useStoreConfig } = useConfig();
	const { store, persistor } = useStoreConfig();

	// Views
	const { useScreens, useLayouts } = useViews();
	const { Home, NewProperty, PropertyShow } = useScreens();
	const { Layout } = useLayouts();

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<Suspense fallback={<div>Loading...</div>}>
					<Router>
						<Layout>
							<Switch>
								<Route
									exact
									path="/"
									component={() => {
										return <Redirect to="/home" />;
									}}
								/>
								<Route exact path="/home" component={Home} />
								<Route exact path="/property/:code" component={PropertyShow} />
								<Route exact path="/publicar" component={NewProperty} />
							</Switch>
						</Layout>
					</Router>
				</Suspense>
			</PersistGate>
		</Provider>
	);
};

export default App;
