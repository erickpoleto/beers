import  React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Items from './pages/items';
import About from './pages/about';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/items" component={Items}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    );
}