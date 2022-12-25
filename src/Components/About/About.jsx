import React from "react";
import Clippy from "../Clippy/Clippy";

import "./About.css";
import tedximage from "../../assets/2019-1.jpg"

function About() {
  return (
    <div className="about bg-black text-white">
      <div className="about__container grid grid-flow-row md:grid-cols-2" id="about">
        <div className="about__section">
          <h1 className="section__title text-5xl">ABOUT TED</h1>
          <p className="text-sm text-left">
            An idea can blossom into something that can bring unspeakable joy or
            misery to millions. Every human endeavour no matter how small or
            great began with a simple idea. This philosophy is at the heart of
            TED whose mission is to spread ‘ideas worth spreading’ to the
            masses. <br />
            TED is a media organization devoted to spreading ideas. Owing to its
            Silicon Valley origins TED's early emphasis was on technology,
            entertainment and design,but it has since broadened its focus to
            include talks on many scientific, cultural, humanitarian and
            academic topics. Each Ted talk is given by an expert in their
            particular field. Past speakers include Bill Clinton, Al Gore,
            Gordon Brown, David Cameron, Billy Graham, Richard Dawkins, Bill
            Gates, Bono, Google founders Larry Page and Sergey Brin, and many
            Nobel Prize winners.
          </p>
        </div>
        <img src={tedximage} alt="" className="about__image" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {/* <div className="about__section">
          <h1 className="section__title text-5xl">TEDx</h1>
          <p className="text-sm">
            TEDx is a program of local, self-organized events that bring people
            together to share a TED-like experience. Our event is called
            TEDxMEC, where x = independently organized TED event. At our TEDxMEC
            event, TED Talks video and live speakers will combine to spark deep
            discussion and connection in a small group. The TED Conference
            provides general guidance for the TEDx program, but individual TEDx
            events are self-organized. <br />
            <br />
            At our TEDxMEC event, TED Talks video and live speakers will combine
            to spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the TEDx program, but
            individual TEDx events are self-organized. <br />
            <br />
          </p>
        </div> */}
        {/* <div className="mt-5">
          {" "}
          <Clippy />
        </div>
        <div className="mt-5">
          {" "}
          <Clippy />
        </div> */}
        {/* <div className="about__section">
          <h1 className="section__title text-5xl">TEDxMEC</h1>
          <p className="text-sm">
            TEDx is a program of local, self-organized events that bring people
            together to share a TED-like experience. Our event is called
            TEDxMEC, where x = independently organized TED event. At our TEDxMEC
            event, TED Talks video and live speakers will combine to spark deep
            discussion and connection in a small group. The TED Conference
            provides general guidance for the TEDx program, but individual TEDx
            events are self-organized. <br />
            <br />
            At our TEDxMEC event, TED Talks video and live speakers will combine
            to spark deep discussion and connection in a small group. The TED
            Conference provides general guidance for the TEDx program, but
            individual TEDx events are self-organized. <br />
            <br />
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default About;
