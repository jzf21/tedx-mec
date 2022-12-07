import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Butterfly from "./Components/Butterfly/Butterfly";
import { ParallaxText } from "./Components/ScrollBanner/Scrollbanner";
import { ParallaxTextleft } from "./Components/ScrollBanner/Scrollbannerleft";
import Speakers from "./Components/Speakers/Speakers";

function App() {
  return (
    <>
      <div className="h-[100vh]">
        <Butterfly />
      </div>
      <Home />
      <ParallaxText>
        <span
          className="text-white text-3xl
        "
        >
          ||TECHNOLOGY||ENTERTAINMENT||DESIGN
        </span>
      </ParallaxText>
      <ParallaxTextleft>
        <span
          className="text-white text-3xl
        "
        >
          TECHNOLOGY||ENTERTAINMENT||DESIGN||
        </span>
      </ParallaxTextleft>

      <About />
      <Speakers/>
    </>
  );
}

export default App;
