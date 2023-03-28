import { AppContext } from "./App";
import React, { useContext } from "react";

function submitToAPI(data, onSuccess, onError) {
  fetch("http://localhost:3000/songs", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data.image_url, data.audio_url);
    })
    .catch((error) => onError(error));
}

function FileForm() {
  const { latestPost, setLatestPost } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("name", event.target.name.value);
    data.append("length", event.target.length.value);
    data.append("album_id", event.target.album_id.value);
    data.append("image", event.target.image.files[0]);
    data.append("audio", event.target.audio.files[0]);

    submitToAPI(
      data,
      (imageUrl, audioUrl) => setLatestPost({ image_url: imageUrl, audio_url: audioUrl }),
      (error) => console.error(error)
    );
  }

  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />

        <label htmlFor="length">Length</label>
        <input type="text" name="length" id="length" />
        <br />

        <label htmlFor="album_id">Album ID</label>
        <input type="text" name="album_id" id="album_id" />
        <br />

        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <label htmlFor="audio">Audio</label>
        <input type="file" name="audio" id="audio" />
        <br />

        <button type="submit">Create Song</button>
      </form>
    </div>
  );
}

export default FileForm;

