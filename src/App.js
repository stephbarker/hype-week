import React, { useState, useEffect } from 'react';

import './App.css';
import Login from './components/Login';
import Player from "./components/Player";

import { getTokenFromUrl } from "./config/spotify";
import { useDataLayerValue } from "./DataLayer";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getPlaylist("37i9dQZEVXcKjGV31cVGoB").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, [token, dispatch]);

  return <div className="app">{token ? <Player spotify={spotify} token={token} /> : <Login />}</div>;
}

export default App;
