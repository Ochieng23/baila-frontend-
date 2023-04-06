import { useState } from "react";
import React from "react";
function Playlist() {
  const [songs, setSongs] = useState([]);

  const handleDelete = (index) => {
    const playlistSongs = JSON.parse(localStorage.getItem("playlists songs"));
    playlistSongs.splice(index, 1);
    localStorage.setItem("playlists songs", JSON.stringify(playlistSongs));
    setSongs(playlistSongs);
  };

  const playlistSongs =
    JSON.parse(localStorage.getItem("playlists songs")) || [];

  return (
    <div style={{ display: "flex", flexDirection: "row",paddingLeft:"220px" }}>
      <h1 style={{ color: "white" }}>......</h1>
      <div  style={{ display: "flex", flexWrap: "wrap", gap:"15px" }} >
        {playlistSongs &&
          playlistSongs.map((song, index) => (
            <div key={index}>
              <div className="card" style={{ width: "250px",height:"auto", border:"2px solid white"}}>
                <img
                  className="card-img-top img-fluid"
                  src={song.image_url}
                  alt="Card image cap"
                  style={{width:"250px", height:"180px"}}
                />
                <div className="card-body">
                  <h5 style={{ color: "white" }} className="card-title">
                    {song.name}
                  </h5>
                  <audio
                    src={song.audio_url}
                    controls
                    style={{ width: "250px" }}
                  />
                  <button
                  style={{
                    background: "lightblue",
                    color: "black",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginBottom: "3px",
                    marginLeft:"80px"
                  }}
                   onClick={() => handleDelete(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Playlist;
