import React from "react";
import { BsTwitter } from "react-icons/bs";
import tedx from "../../assets/tedxmec.png";
import modellogo from "../../assets/react.svg";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className=" hidden mx-auto md:block h-[0.6px] bg-[#00000042] items-center  self-center w-[80%] "></div>
        <div className="  footer-bg min-h-[300px]  text-white p-5 md:px-5 md:py-0   items-center grid md:grid-cols-3 md:grid-rows-1 md:gap-4">
          <div className="flex flex-col content-center items-center gap-4 md:col-start-2 md:row-start-3 order-2">
            <div className="flex flex-row justify-end items-center gap-8 md:gap-16 md:col-start-2 md:row-end-1 pt-5">
              <a href="" className="hover:text-white">
                <FaFacebookF size={22} fill="#D31E1E" />
              </a>
              <a href="">
                <RiInstagramFill size={22} fill="#D31E1E" />
              </a>
              <a href="">
                <BsTwitter size={22} fill="#D31E1E" />
              </a>
              <a href="">
                <FaLinkedinIn size={22} fill="#D31E1E" />
              </a>
            </div>
            <div className="hidden md:block text-[#D31E1E] text-center ">
              <p>
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
          </div>

          <div className="  grid grid-col items-center content-center  md:col-start-1 md:row-start-3 order-1">
            <img
              className="mx-auto scale-50  "
              src={tedx}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center  order-3 md:col-start-3 md:row-start-3">
            <img className=" scale-75 md:scale-100 " src={tedx} alt="" />

            <div className="block  text-center md:hidden whitespace-nowrap text-[#D31E1E] ">
              <p>
                This independent TEDx event is operated under license from TED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
