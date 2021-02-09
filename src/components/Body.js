import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

import "../css/Body.css";
import { useDataLayerValue } from "../DataLayer";

function Body({ token }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()
    // const playPlaylist = () => {
    //     dispatch({
    //         type: "SET_PLAYING",
    //         playing: true,
    //       })
    //       dispatch({
    //         type: "SET_PLAY_URI",
    //         play_uri: "spotify:playlist:37i9dQZEVXcKjGV31cVGoB",
    //       })
    //       spotify.getMyCurrentPlayingTrack().then((r) => {
    //         dispatch({
    //           type: "SET_ITEM",
    //           item: r.item,
    //         })
    //       })
    //     }

    return (
        <div className="body">
            <div className="body_info">
                <img className='img' src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <h2> Hear Your Hype Week!</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-player">
            <SpotifyPlayer className="spotify-player"
                token={token}
                showSaveIcon={true}
                uris={["spotify:playlist:37i9dQZEVXcKjGV31cVGoB"]}
                magnifySliderOnHover={true}
                autoPlay={true}
                styles={{
                  height: 100,
                  activeColor: '#fff',
                  bgColor: 'linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));',
                  color: 'aqua',
                  loaderColor: 'linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));',
                  sliderTrackColor: 'linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));',
                  sliderColor: 'aqua',
                  trackArtistColor: '#ccc',
                  trackNameColor: '#fff',
                  sliderHeight: 10,
                  sliderHandleColor: 'white',
                }}
              />
              </div>
                {/* <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" onClick={playPlaylist} />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div> */}
                {/* <div className="body__songs">
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
                 </div>     */}
            </div>
    );
}

export default Body;