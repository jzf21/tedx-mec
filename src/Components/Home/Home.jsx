import React from "react";
import { delay, motion } from "framer-motion";
import "./Home.css";
import X from "../../assets/cutout4.png";
import bg from "../../assets/2019-1.jpg";
import X2 from "../../assets/Group 1.png";
import Clippy from "../Clippy/Clippy";
import Butterfly from "../Butterfly/Butterfly";
import Macintosh from "../Macintosh/Macintosh";

const Home = () => {
  return (
    <motion.div className="bg-[#111111] h-[100vh] flex ">
      <div className="grid grid-cols-2">
        <div className="col-span-1 text-white text-5xl ">
          COMING SOON
        </div>
        <div>
          <Macintosh />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
