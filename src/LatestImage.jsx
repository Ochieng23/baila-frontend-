import React, { useState, useEffect } from "react";

function LatestImage() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
        const response = await fetch("http://localhost:3000/latest");
        const data = await response.json();
        setLatestPost({
          name: data.name,
          length: data.length,
          album_id: data.album_id,
          image_url: data.image_url,
          audio_url: data.audio_url,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestPost();
  }, []);

  const handleEdit = async () => {
    try {
      await fetch(`http://localhost:3000/latest/${latestPost.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: latestPost.name,
          length: latestPost.length,
          album_id: latestPost.album_id,
          image_url: latestPost.image_url,
          audio_url: latestPost.audio_url,
        }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/latest/${latestPost.id}`, {
        method: "DELETE",
      });
      setLatestPost(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLatestPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (!latestPost) {
    return <div>Loading latest post...</div>;
  }

  return (
    <div style={{border:"2px solid white"}}>
      <img
        src={latestPost.image_url}
        alt="latest post"
        className="latest-image"
      />
      <p>{latestPost.name}</p>
      <p>{latestPost.length}</p>
      <p>{latestPost.album_id}</p>
      <div style={{marginLeft:"270px"}}>
      <audio controls src={latestPost.audio_url} />
      </div>
      <div style={{marginTop:'5px', marginLeft:"310px"}}>
      <button  style={{marginLeft:"20px", borderRadious:"10px", backgroundColor:"lightblue", width:"80px", fontWeight:"bold", height:"30px"}}  onClick={handleEdit}>Edit</button>
      <button style={{marginLeft:"20px", borderRadious:"10px", backgroundColor:"lightblue", width:"80px", fontWeight:"bold",height:"30px"}} onClick={handleDelete}>Delete</button>
      </div>
      <form>
        <label>
          Name:
          <input
          style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
            type="text"
            name="name"
            value={latestPost.name}
            onChange={handleInputChange}
            placeholder="name"
          />
        </label>
        <label>
          Length:
          <input
          style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
            type="text"
            name="length"
            value={latestPost.length}
            onChange={handleInputChange}
            placeholder="length"
          />
        </label>
        <label>
          Album ID:
          <input
          style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
            type="text"
            name="album_id"
            value={latestPost.album_id}
            onChange={handleInputChange}
            placeholder="Album"
          />
        </label>
        <label>
          Image URL:
          <input
          style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
            type="text"
            name="image_url"
            value={latestPost.image_url}
            onChange={handleInputChange}
            placeholder="thumbprint"
          />
        </label>
        <label>
          Audio URL:
          <input
          style={{marginTop:"5px",width:"120px",borderRadius:"3px" }}
            type="text"
            name="audio_url"
            value={latestPost.audio_url}
            onChange={handleInputChange}
            placeholder="snippet"
          />
        </label>
      </form>
    </div>
  );
}

export default LatestImage;
