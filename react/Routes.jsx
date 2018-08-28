import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';

const Routes = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" render={() => <Home props={props} />} />
        </BrowserRouter>
    );
};

export default Routes;
