import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../container/NotFound';
import Home from '../container/Home';
import PropertyDescriptionContainer from '../container/PropertyDescriptionContainer';
import PropertyResultContainer from '../container/PropertyResultContainer';
import NewPropertyFormContainer from '../container/NewPropertyFormContainer';


const App = () => {
    return (
        <BrowserRouter >
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
        </BrowserRouter >
    );
};


export default App;