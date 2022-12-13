import React from 'react'
import { NavBar } from '../NavBar/NavBar'

export const Tedx = () => {
  return (
    <div id ="tedx"className="about bg-black text-white">
    <div className="about__container" id="about">
      <h1 className="section__title text-5xl">ABOUT TEDx, x = independently organized event </h1>
      <div className="about__section">
        <p className="text-sm">
        In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring
people together to share a TED-like experience. At a TEDx event, TED Talks video and live
speakers combine to spark deep discussion and connection. These local, self-organized events
are branded TEDx, where x = independently organized TED event. The TED Conference provides
general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to
certain rules and regulations.)
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
            </div>
    </div>
  )
}

export default Tedx