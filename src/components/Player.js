import React from "react";

import "../css/Player.css";
import Body from "./Body";

function Player({ spotify, token }) {
  return (
    <div className="player">
      <div className="player__body">
        <Body spotify={spotify} token={token} />
      </div>
    </div>
  );
}

export default Player;