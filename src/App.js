import React, { useState, useRef } from "react";
// import "./App.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import Project from "./pages/Project";
import AboutUs from "./pages/AboutUs";
import { Routes, Route } from "react-router-dom";
import BigBoyToyz from "./components/BigBoyToyz";
import Ayushtha from "./components/Ayushtha";
import TastyTreat from "./components/TastyTreat";
import SheafIcons from "./components/SheafIcons";
import PackagingWorkshop from "./components/PackagingWorkshop";

function App() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [home, sethome] = useState(true);
  const [project, setproject] = useState(false);
  const [about, setabout] = useState(false);

  const [click, setClick] = useState((windowSize.current[0]<=430)?true:false);

  const handleIntroClick = () => {
    setClick(true);
  };
  return (
    <div className="App">
      {
        click ? (
        <div className="App">
        <Navbar home={home} sethome={sethome} project={project} setproject={setproject} about={about} setabout={setabout}/>
          <Routes>
            <Route path="/" element={<Home home={home} sethome={sethome} project={project} setproject={setproject} about={about} setabout={setabout}/>} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/bigBoyToyz" element={<BigBoyToyz />} />
            <Route path="/ayushtha" element={<Ayushtha />} />
            <Route path="/tastyTreat" element={<TastyTreat />} />
            <Route path="/sheafIcons" element={<SheafIcons />} />
            <Route path="/packagingWorkshop" element={<PackagingWorkshop />} />
          </Routes>
    </div> 
      ) : (
        <Intro onIntroClick={handleIntroClick} />
      )}
    </div>
  );
}

export default App;
