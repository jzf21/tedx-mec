import React, { useState } from "react";
import { delay, motion } from "framer-motion";
import "./Home.css";
import tedxmec from '../../assets/tedxmec.png'
import banner from '../../assets/banner-bg.png'
const Home = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (

    <div className="landingpage">
      <div className="landing-nav">
        <img src={tedxmec} alt="" className=" scale-100" />

      </div>
      <div className="landing-content1">
        <div className="container">
          <h1 className="title">
            <span>coming soon</span>
          </h1>
        </div>
      </div>
      
    </div>
    // <motion.div className="bg-[ur()]] h-[100vh] grid grid-cols-2 ">
    //   <img
    //     src={banner}
    //     alt=""
    //     className="absolute top-0 left-0 w-full h-full "
    //   />
    // a
    //   <img src={tedxmec} alt="" className=" scale-100" />

    //   <h2 className="scale-100">coming soon</h2>

    //   {/* <motion.h1
    //     transition={{ duration: 1, repeatType: "reverse" }}
    //     className="text-5xl text-white vertical-text m-2"
    //   >
    //     Coming Soon
    //   </motion.h1> */}
    // </motion.div>
    
  );
};

export default Home;

