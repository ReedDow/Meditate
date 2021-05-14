import './App.css';
// import React from 'react';
import {useRoutes} from 'hookrouter';
import routes from './routes'
// import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Header/Navbar'
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Audio from './Components/audioLinks/Audio';



function App() {
  const routeResult = useRoutes(routes)
  return (
    <div className = 'app'>
    <Navbar/>
    {routeResult}
    </div>
  )
}

export default App;
