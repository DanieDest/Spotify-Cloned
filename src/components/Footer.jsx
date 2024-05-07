import React from "react";
import "../Css/Footer.css";
import CurrentTrack from "./CurrentTrack";
import PlayerControls from "./PlayerControls";

const Footer= () => {
    return (
      <div className="Container-footer">
        <CurrentTrack />
        <PlayerControls />
      </div>
    )
};



export default Footer