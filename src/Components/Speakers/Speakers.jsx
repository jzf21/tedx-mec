import React from "react";
import { motion } from "framer-motion";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

const Speakers = () => {
  return (
    <div className="my-5 mx-5 text-white">
      <h1 className="text-4xl text-center text-white font-bold">
        Speakers
      </h1>
      <p className="text-center mx-auto w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam soluta ab, minima, fugit enim fugiat ut ea nisi accusantium aliquam sunt ducimus sit modi, molestias officiis quod itaque tenetur voluptatibus!</p>
      <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <SpeakerCard/>
      </div>
    </div>
  );
};

export default Speakers;
