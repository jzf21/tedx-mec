import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Butterfly from "./Components/Butterfly/Butterfly";
import { ParallaxText } from "./Components/ScrollBanner/Scrollbanner";
import { ParallaxTextleft } from "./Components/ScrollBanner/Scrollbannerleft";
import Speakers from "./Components/Speakers/Speakers";
import Homepage from "./Pages/Homepage";
import Loadingscreen from "./Components/Loadingscreen.jsx/Loadingscreen";
import Contact from "./Components/Contact/Contact";
import { NavBar } from "./Components/NavBar/NavBar";
import { Route, Routes} from "react-router-dom";
import { Tedx } from "./Components/Tedx/Tedx";
import { Tedxmec } from "./Components/Tedxmec/Tedxmec";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);
  return (
    
    <>
     <Routes>
     
     <Route path="/tedx" element={<Tedx />} />
     <Route path="/tedxmec" element={<Tedxmec />} />
      
     </Routes>
      {/* <Homepage />
      */}
      {/* <div className="h-[100vh]">
        <Butterfly />
      </div> */}
      {loading ? (
        <Loadingscreen />
      ) : (
        <>
          
          <NavBar />
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
          <Speakers />
          <Contact />
        </>
      )}


    </>
  );
}

export default App;
