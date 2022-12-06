import React from "react";
import { delay, motion } from "framer-motion";
import "./Home.css";
import X from "../../assets/cutout4.png";
import bg from "../../assets/2019-1.jpg";
import X2 from "../../assets/Group 1.png";
import Clippy from "../Clippy/Clippy";

const Home = () => {
  return (
    <motion.div className="bg-[#111111] h-[100vh] flex ">
      <div className="title_center ">
        {/* <h1 className="text-5xl font-bold text-white">TEDx</h1>
        <h1 className="text-5xl font-bold text-white">MEC</h1> */}
        <h1 className="text-5xl font-bold text-white">Coming Soon</h1>
      </div>
      <motion.div
        animate={{ rotate: 0 }}
        initial={{ x: 0, rotate: 90 }}
        className="tedx-box  bg-red-700 "
      ></motion.div>
      {/* bg-[url(https://media4.giphy.com/media/apLbFrlDVQZV5oUTXT/giphy.gif?cid=ecf05e475w1nh28b7o3772abqrzy98r8g42n9bru60t1yld4&rid=giphy.gif&ct=g)] */}
      {/* <Clippy /> */}
    </motion.div>
  );
};

export default Home;
