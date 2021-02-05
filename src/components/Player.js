import React from "react";

import "../css/Player.css";
import Body from "./Body";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Body spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;