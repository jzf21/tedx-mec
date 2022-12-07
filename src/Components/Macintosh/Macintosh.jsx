import React from "react";
import "./Macintosh.css";

const Macintosh = () => {
  return (
    <div className="relative scale-75">
      <div class="macintosh" aria-label="1984 Macintosh illustration">
        <div class="monitor">
          <div class="monitor-inner">
            <div class="screen-cutout">
              <div class="screen"></div>
            </div>
            <div class="logo">
              <p>🏳️‍🌈</p>
            </div>
            <div class="opening">
              <div class="opening-inner"></div>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="inset"></div>
          <div class="cable-container">
            <div class="cable-hole"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Macintosh;
