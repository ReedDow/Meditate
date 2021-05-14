import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Audio from './Components/audioLinks/Audio';

const routes = {
    "/": () => <Home />,
    "/video": () => <Video />,
    // "/audio": () => <Audio />,
    
  };
  export default routes;
