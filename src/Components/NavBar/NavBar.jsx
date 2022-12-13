import React from "react";
import { Link } from "react-router-dom";
import { Tedx } from "../Tedx/Tedx";

import tedxlogo from "../../assets/tedxlogo.png";
export const NavBar = () => {
    return (
      <div>
        
<nav class="bg-[#111111] px-5 sm:px-4 py-10 rounded-b-3xl fixed w-full z-20 top-0 left-0 ">

  <div class="container flex flex-wrap items-center justify-center ">

        <div>
            <ui>
                <li>
                <a href="#tedx" class="flex justify-between items-center py-2 pl-3 pr-40 text-white" aria-current="page">ABOUT TEDX</a>
                </li>
            </ui>
        </div>

        <div>
            <ui>
                <li>
        <a href="#home" class="flex justify-between items-center py-5 text-6xl font-bold whitespace-nowrap dark:text-red-900">
                X
        </a>
                </li>
            </ui>
        </div>

        <div>
            <ui>
                <li>
                <a href="#tedxmec" class="flex justify-between items-center py-2 pl-40 pr-4 text-white" aria-current="page">ABOUT TEDXMEC</a>
                </li>
            </ui>
        </div>

        


  
    </div>
</nav>

      </div>
    );
  };

export default NavBar