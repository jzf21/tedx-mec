import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Butterfly from "./Components/Butterfly/Butterfly";
import { ParallaxText } from "./Components/ScrollBanner/Scrollbanner";
import { ParallaxTextleft } from "./Components/ScrollBanner/Scrollbannerleft";

import Loadingscreen from "./Components/Loadingscreen.jsx/Loadingscreen";
import Contact from "./Components/Contact/Contact";
import Carousel from "./Components/Carouslcool";
import Footer from "./Components/footer/Footer";
import Speakers from "./Components/Speakers/Speakers";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loadingscreen />
      ) : (
        <>
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
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
