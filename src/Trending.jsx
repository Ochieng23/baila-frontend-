import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css"

function Trending() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("https://baila-backend.onrender.com/uploads")
      .then((res) => res.json())
      .then((res) => setTrends(res));
  }, []);

  const handlePlaylist = (trend) => {
    let playlistSongs = [];

    if (localStorage.getItem("playlists songs")) {
      playlistSongs = JSON.parse(localStorage.getItem("playlists songs"));
    }

    playlistSongs.push(trend);
    localStorage.setItem("playlists songs", JSON.stringify(playlistSongs));

    console.log(playlistSongs);
  };

  return (
    <div>
      <h1>Trending</h1>
      <div
        className="row"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {trends.map((trend, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            <div className="card grow" style={{ width: "15rem" }}>
              <Link to={`/playlist/${trend.id}`}>
                <img
                  src={trend.image_url}
                  alt={trend.name}
                  style={{ width: "200px", height: "180px" }}
                  className="card-img-top img-fluid"
                />
              </Link>
              <div className="card-body">
                <p className="card-text" style={{ margin: "3px" }}>
                  {trend.name}
                </p>
                <audio
                  src={trend.audio_url}
                  controls
                  style={{ width: "200px", height: "" }}
                />
                <button
                  className="btn btn-primary grow"
                  style={{ marginTop: "5px", borderRadius: "5px", backgroundColor: "lightblue", fontWeight: "bold" }}
                  onClick={() => handlePlaylist(trend)}
                >
                  Add to Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;

