import logo from './logo.svg';
import './App.styles.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HappyBdayPage from "./pages/happyBdayPage/happyBdayPage"
import GamePage from "./pages/gamePage/gamePage"
import GalleryPage from "./pages/galleryPage/galleryPage"
import VideoPage from "./pages/videoPage/videoPage"

import NavBar from "./components/navBar/navBar"

function App() {
  const navItems = [
    {name: "Home", link: "/"},
    {name: "Video", link: "/videoPage"},
    {name: "Gallery", link: "/galleryPage"},
    {name: "Game", link: "/gamePage"},
  ]
  return (
    <Router>
      <div className="App">
         <NavBar navItems={navItems}/>
         <Switch> 
            <Route exact path="/">
                <HappyBdayPage/> 
            </Route>
            <Route path="/videoPage">
                <VideoPage/> 
            </Route>
            <Route path="/galleryPage">
                <GalleryPage/> 
            </Route>
            <Route path="/gamePage">
                <GamePage/> 
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
