import React from "react";
import { delay, motion } from "framer-motion";
import "./Home.css";
import X from "../../assets/cutout4.png";
import bg from "../../assets/2019-1.jpg";
import X2 from "../../assets/Group 1.png";
import Clippy from "../Clippy/Clippy";
import Butterfly from "../Butterfly/Butterfly";
import Macintosh from "../Macintosh/Macintosh";
import Imac from "../Imac/Imac";

const Home = () => {
  return (
    <motion.div className="bg-[#111111] h-[100vh] flex items-center justify-center ">
      <div className="scale-75">
        <Imac />
      </div>
    </motion.div>
  );
};

export default Home;
