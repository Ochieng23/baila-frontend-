import React, { useState } from "react";

function FileForm() {
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();

    data.append("name", name);
    data.append("length", length);
    data.append("album_id", albumId);
    data.append("image", imageFile);
    data.append("audio", audioFile);

    setIsLoading(true);

    fetch("https://baila-backend.onrender.com/songs", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }

  return (
    <div style={{border:"3px solid white"}}>
      <h1 style={{ color: "white" }}>ADD SONG</h1>
      <form onSubmit={handleSubmit} style={{margin:'5px'}}>
        <label htmlFor="name" style={{ color: "white" }}>
          Name:
        </label>
        <input
            style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        
        <label htmlFor="length" style={{ color: "white", marginTop:"10px" }}>
          Length:
        </label>
        <input
        style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
          type="text"
          name="length"
          id="length"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <br />

        <label htmlFor="album_id" style={{ color: "white" }}>
          Album ID:
        </label>
        <input

            style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
          type="text"
          name="album_id"
          id="album_id"
          value={albumId}
          onChange={(e) => setAlbumId(e.target.value)}
        />
        <br />

        <label htmlFor="image" style={{ color: "white" }}>
          Image:
        </label>
        <input
            style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
          type="file"
          name="image"
          id="image"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <br />

        <label htmlFor="audio" style={{ color: "white" }}>
          Audio:
        </label>
        <input
            style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
          type="file"
          name="audio"
          id="audio"
          onChange={(e) => setAudioFile(e.target.files[0])}
        />
        <br />

        <button 
             style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
        className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Creating Song..." : "Create Song"}
        </button>
      </form>
    </div>
  );
}

export default FileForm;
