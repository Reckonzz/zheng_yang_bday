import logo from './logo.svg';
import './App.styles.scss';
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HappyBdayPage from "./pages/happyBdayPage/happyBdayPage"
import GamePage from "./pages/gamePage/gamePage"
import GalleryPage from "./pages/galleryPage/galleryPage"
import VideoPage from "./pages/videoPage/videoPage"

import NavBar from "./components/navBar/navBar"

function App() {

  const navItems = [
    {name: "Home", link: `${process.env.PUBLIC_URL}/`},
    {name: "Video", link: `${process.env.PUBLIC_URL}/videoPage`},
    {name: "Gallery", link: `${process.env.PUBLIC_URL}/galleryPage`},
    {name: "Game", link: `${process.env.PUBLIC_URL}/gamePage`},
  ]
  return (
    <Router>
      <div className="App">
         <NavBar navItems={navItems}/>
         <div className="nav-padding"></div>
         <Switch> 
            <Route exact path={`${process.env.PUBLIC_URL + '/'}`}>
                <HappyBdayPage/> 
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/videoPage`}>
                <VideoPage/> 
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/galleryPage`}>
                <GalleryPage/> 
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/gamePage`}>
                <GamePage/> 
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
