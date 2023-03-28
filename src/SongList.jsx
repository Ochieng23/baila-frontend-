import React, { useState, useEffect } from 'react';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then(res => res.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const reversedSongs = songs.length > 0 ? [...songs].reverse() : [];

  return (
    <div style={{display: 'flex', flexWrap:"wrap", borderRadius:"3px", gap:"2px"}}>
      {reversedSongs.map(song => (
        <div className="card" style={{width: "18rem"}}>
          <img src={song.image_url} alt={song.name} style={{width:"200px", height:"190px"}}  class="card-img-top" />
          <div className="card-body">
            <p className="card-text">{song.name}</p>
            <audio src={song.audio_url} controls style={{width:"200px"}}/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;




