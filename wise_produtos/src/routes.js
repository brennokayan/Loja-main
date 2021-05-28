import React from 'react';
import Home from './telas/home/index_home'
import Produtos from './telas/Produtos'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Produtos} />
        </Switch>
    </BrowserRouter>
);

export default Routes;