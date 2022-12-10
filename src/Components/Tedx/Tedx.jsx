import React from 'react'
import { NavBar } from '../NavBar/NavBar'

export const Tedx = () => {
  return (
    <div>
        <NavBar />
            <div class= "text-red-800 flex flex-wrap item-center pt-8">
                <h1>
                What is TEDx?
                </h1>
                <p>
                In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program
                of local, self-organized events that bring people together to share a TED-like experience. Our
                event is called TEDxMEC, where x = independently organized TED event. At our TEDxMEC event,
                TED Talks video and live speakers will combine to spark deep discussion and connection in a
                small group. The TED Conference provides general guidance for the TEDx program, but individual
                TEDx events, including ours, are self-organized.
                </p>
            </div>
    </div>
  )
}

export default Tedx