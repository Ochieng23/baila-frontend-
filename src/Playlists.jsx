import {useState} from 'react'
import React from 'react';
function Playlist() {
  const [songs, setSongs] = useState([]);

  const handleDelete = (index) => {
    const playlistSongs = JSON.parse(localStorage.getItem("playlists songs"));
    playlistSongs.splice(index, 1);
    localStorage.setItem("playlists songs", JSON.stringify(playlistSongs));
    setSongs(playlistSongs);
  };
  
  const playlistSongs = JSON.parse(localStorage.getItem("playlists songs")) || [];

  return (
    <div style={{ display: "flex" }}>
      <h1 style={{ color: "white" }}>......</h1>
      <ul>
        {playlistSongs &&
          playlistSongs.map((song, index) => (
            <li key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={song.image_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 style={{ color: "white" }} className="card-title">
                    {song.name}
                  </h5>
                  <audio
                    src={song.audio_url}
                    controls
                    style={{ width: "200px" }}
                  />
                  <button onClick={() => handleDelete(index)}>Remove</button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Playlist;
