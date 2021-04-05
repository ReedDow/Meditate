import './App.css';
import React from 'react';
// import routes from './routes'
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Components/Header/Navbar'
import Video from './Components/videolinks/Video';
import Home from './Components/homelinks/Home';
import Audio from './Components/audioLinks/Audio';
import routes from './routes'


function App() {
  return (
    <BrowserRouter>s
    <div className="App">
      <Navbar/>
      <Home/>
      <Video/> 
      {/* {routes}  */}
      

    </div>
    </BrowserRouter>
  );
}

export default App;
