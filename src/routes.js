import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Audio from './Components/audioLinks/Audio';
import Parallax from './Components/parallax/parallaxView'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/video' component={Video} />
            <Route path='/audio' component={Audio} />
            {/* <Route path='/parallax' component={Parallax} /> */}
        </Switch>
    </BrowserRouter>
)