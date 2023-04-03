import React, { useState } from "react";

function Playlist({ playlistSongs }) {
  const [songs, setSongs] = useState(playlistSongs);

  const handleDelete = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
    localStorage.setItem("playlistSongs", JSON.stringify(newSongs));
  };
   console.log(songs)
  return (
    <div>
      <h1 style={{color:"white"}}>Playlist Coming Soon...</h1>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <div className="card" style={{width:"18rem"}}>
              <img
                className="card-img-top"
                src={song.image_url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 style={{color:"white"}} className="card-title">{song.name}</h5>
                <audio
                  src={song.audio_url}
                  controls
                  style={{ width: "200px" }}
                />
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
