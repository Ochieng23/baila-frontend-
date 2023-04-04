import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css"

function SongList() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://baila-backend.onrender.com/home")
      .then((res) => res.json())
      .then((data) => (Array.isArray(data) ? setSongs(data) : setSongs([])))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );
  const reversedSongs =
    filteredSongs.length > 0 ? [...filteredSongs].reverse() : [];

  return (
     <div className="container">
    <div className="row">
    <div className="col-sm-12 col-md-6 col-lg-4 "  style={{backgroundColor:"black", minWidth:"70vw", gap:"15px"}}>
      <div>
        <Navbar search={search} setSearch={setSearch} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          borderRadius: "5px",
          gap: "2px",
          margin: "10px",
        }}
      >
        {reversedSongs.map((song) => (
          <div className="card grow" style={{ width: "200px" }}>
            <img
              src={song.image_url}
              alt={song.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <h3
                className="card-text "
                style={{ color: "white", margin: "3px" }}
              >
                {song.name}{" "}
              </h3>
              <audio
                src={song.audio_url}
                controls
                style={{ width: "198px", margin:"5px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default SongList;
