import React from 'react';

import "../css/Body.css";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../DataLayer";

import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";


function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()
    const playPlaylist = () => {
        dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
          dispatch({
            type: "SET_PLAY_URI",
            play_uri: "spotify:playlist:37i9dQZEVXcKjGV31cVGoB",
          })
          spotify.getMyCurrentPlayingTrack().then((r) => {
            dispatch({
              type: "SET_ITEM",
              item: r.item,
            })
          })
        }

    return (
        <div className="body">
            <div className="body_info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
                 </div>    
            </div>
    );
}

export default Body;