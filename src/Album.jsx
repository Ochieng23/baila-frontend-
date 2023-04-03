import { useState, useEffect } from 'react';

function Album() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://baila-backend.onrender.com/albums')
      .then(res => res.json())
      .then(res => setAlbums(res));
  }, []);

  return (
    <div>
      {albums.map(album => (
        <div key={album.id} style={{display:'flex'}}>
          <h2>{album.title}</h2>
          <p style={{color:"white"}}>Name: {album.name}</p>
          <p style={{color:"white"}}>Year: {album.release_date}</p>
          <p style={{color:"white"}}>Genre: {album.songs.name}</p>
          <p style={{color:"white"}}>Label: {album.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Album;

