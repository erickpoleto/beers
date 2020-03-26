import  React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}