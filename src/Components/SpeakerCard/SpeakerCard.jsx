import React from "react";
import { motion } from "framer-motion";
import "./SpeakerCard.scss";
export const SpeakerCard = () => {
  return (
    <div class="box">
      <div class="imgBox">
        {/* <motion.div
          initial={{ y: 100, height: 100, opacity: 0 }}
          whileHover={{ height: 100, opacity: 1 }}
        >
          <p>
            <span>🏳️‍🌈</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            repellat quidem nobis perspiciatis at veniam perferendis, quas sint
            placeat molestiae nam libero eaque exercitationem incidunt
            voluptatibus consequatur quisquam maxime ipsam.
          </p>
        </motion.div> */}
        <img
          src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div class="content">
        <h2>
          Karan Singh
          <br />
          <span>Graphic Designer</span>
        </h2>
      </div>
    </div>
  );
};
