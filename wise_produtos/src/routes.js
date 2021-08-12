import React from 'react';
import Home from './telas/home'
import Produtos from './telas/Produtos'
import Editar from './telas/Editar'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Produtos} />
            <Route exact path='/cadastrarproduto' component={Home} />
            <Route exact path='/editarproduto/:id' component={Editar} />
            {/* <Route path="/:id" children={<App />} /> */}

        </Switch>
    </BrowserRouter>
);

export default Routes;