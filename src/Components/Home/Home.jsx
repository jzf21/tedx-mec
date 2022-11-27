import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import X from "../../assets/cutout4.png";
import bg from "../../assets/2019-1.jpg";
import X2 from "../../assets/Group 1.png";

const Home = () => {
  return (
    <motion.div className="bg-black h-[100vh] flex ">
      <motion.div
        animate={{ translateX: 600, translateY: 600 }}
        initial={{ width: 20, rotate: 45 }}
        transition={{repeat: Infinity,repeatType:"reverse", duration: 2 }}
        
        
        className="bg-white h-[20px] rotate-45 absolute top-0 left-[25%]   "
      ></motion.div>
      <motion.div
        animate={{ translateX: 600, translateY: 600 }}
        initial={{ width: 20, rotate: 45 }}
        transition={{ repeat: Infinity,repeatType:"reverse" ,duration: 2, delay: 0.01 }}
        className="bg-red-200 h-[20px] rotate-45 absolute top-0 left-[25%]   "
      ></motion.div>

      <motion.h1 className="text-white text-3xl weight-700">TEDXMEC</motion.h1>
      <motion.div
        animate={{ translateX: -600, translateY: 600 }}
        initial={{ width: 20, rotate: 45 }}
        transition={{ repeat: Infinity,repeatType:"reverse",duration: 2, delay: 0.01 }}
        className="bg-white h-[20px] rotate-45 absolute top-0 right-[25%]   "
      ></motion.div>
      <motion.div
        animate={{ translateX: -600, translateY: 600 }}
        initial={{ width: 20, rotate: 45 }}
        transition={{ repeat: Infinity,repeatType:"reverse",duration: 2 }}
        className="bg-red-200 h-[20px] rotate-45 absolute top-0 right-[25%]   "
      ></motion.div>
    </motion.div>
  );
};

export default Home;
