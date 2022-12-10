import React from "react";
import { motion } from "framer-motion";
import { SpeakerCard } from "../SpeakerCard/SpeakerCard";

const Speakers = () => {
  return (
    <div className="grid grid-cols-3 h-[100vh] conic-5 gap-5">
      <SpeakerCard /> <SpeakerCard /> <SpeakerCard /> <SpeakerCard />
      {/* <div className="bg-black col-span-1">
        <motion.div className="flex justify-center items-center ">
          <h1 className="text-white text-5xl font-bold">Speakers</h1>
        </motion.div>
      </div>
      <div className="bg-red-500 col-span-2">2</div>
      <div className="bg-slate-700 col-span-1">3</div> */}
    </div>
  );
};

export default Speakers;
