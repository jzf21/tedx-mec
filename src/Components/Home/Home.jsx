import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div id = "home">
    <motion.div className="bg-[#111111] h-[100vh] ">
      <motion.div className=" translate-y-2/4">
        <motion.div className="relative ">
          <motion.div
            className="relative"
            animate={{ opacity: 0, scale: 0 }}
            initial={{ opacity: 1, scale: 1 }}
            transition={{ delay: 5, duration: 1 }}
          >
            <Macintosh />
          </motion.div>
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0.22 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="relative top-5 -m-[35em] z-20 scale-[0.22]"
          >
            <Imac />
          </motion.div>

      
        </motion.div>
      </motion.div>
      {/* <motion.h1
        transition={{ duration: 1, repeatType: "reverse" }}
        className="text-5xl text-white vertical-text m-2"
      >
        Coming Soon
      </motion.h1> */}
    </motion.div>
    </div>
  );
};

export default Home;
