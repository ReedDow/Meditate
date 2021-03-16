import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Video from './videolinks/Video';
import Home from './home/Home';


export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/video' component={Video} />
        </Switch>
    </BrowserRouter>
)