import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./App.css";
import {FaHeadphones} from "react-icons/fa"

function SongList() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://baila-backend.onrender.com/home");
        const data = await response.json();
        if (Array.isArray(data)) {
          setSongs(data);
        } else {
          setSongs([]);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };
    fetchSongs();
  }, []);

  useEffect(() => {
    const shuffleSongs = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    setSongs(shuffleSongs(songs));
  }, [songs]);

  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(search.toLowerCase())
  );
  const reversedSongs = [...filteredSongs].reverse();

  const handleSongClick = (songId) => {
    // TODO: implement local storage click tracking
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          style={{ backgroundColor: "black", minWidth: "60vw", gap: "10px", paddingLeft:"220px" }}
        >
          <Navbar search={search} setSearch={setSearch} />
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
              <div
                className="card grow"
                style={{ width: "200px" }}
                key={song.id}
                onClick={() => handleSongClick(song.id)}
              >
                <img
                  src={song.image_url}
                  alt={song.name}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <h3 className="card-text" style={{ color: "white", margin: "3px" }}>
                {<FaHeadphones style={{color:"white",height:"20px",width:"25px"}}/>}{song.name}
                  </h3>
                  <audio
                    src={song.audio_url}
                    controls
                    style={{ width: "198px", margin: "5px" }}
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
