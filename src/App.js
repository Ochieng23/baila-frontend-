import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Trending from "./Trending";
import Latest from "./Latest";
import Artist from "./Artist";
import Playlist from "./Playlists";
import Podcasts from "./Podcasts";
import Genres from "./Genres";
import Album from "./Album";
import Account from "./Account";

function App() {
  const [playlistSongs, setPlaylistSongs] = useState([]);

  useEffect(() => {
    const songs = JSON.parse(localStorage.getItem("playlistSongs")) || [];
    setPlaylistSongs(songs);
  }, []);

  useEffect(() => {
    localStorage.setItem("playlistSongs", JSON.stringify(playlistSongs));
  }, [playlistSongs]);

  return (
    <div className="App card-deck" style={{backgroundColor:"black"}}>
      <Sidebar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/artists" element={<Artist />} />
        <Route
          path="/playlists"
          element={<Playlist playlistSongs={playlistSongs} />}
        />
        <Route path="/genres" element={<Genres />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/album" element={<Album />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
