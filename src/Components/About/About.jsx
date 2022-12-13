import React from "react";
import Clippy from "../Clippy/Clippy";

import "./About.css";

function About() {
  return (
    <div className="about bg-black text-white">
      <div className="about__container" id="about">
        <h1 className="section__title text-5xl">ABOUT TED</h1>
        <div className="about__section">
          <p className="text-sm">
          TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day
conference in California 30 years ago, TED has grown to support its mission with multiple
initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to
speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. <br />TED
speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan
Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media
initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which
provides subtitles and interactive transcripts as well as translations from volunteers worldwide;
the educational initiative TED-Ed.<br /> TED has established The Audacious Project that takes a
collaborative approach to funding ideas with the potential to create change at thrilling scale;
TEDx, which supports individuals or groups in hosting local, self- organized TED-style events
around the world, and the TED Fellows program, helping world-changing innovators from around
the globe to amplify the impact of their remarkable projects and activities.
          </p>
        </div>
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
