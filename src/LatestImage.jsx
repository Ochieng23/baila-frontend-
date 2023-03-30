import React, { useContext, useEffect } from "react";
import { AppContext } from "./Home";

function LatestImage() {
  const { latestPost, setLatestPost } = useContext(AppContext);

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
  }, [setLatestPost]);

  return (
    <div>
      <img src={latestPost.image_url} alt="latest post" className="latest-image" />
      <p>{latestPost.name}</p>
      <p>{latestPost.length}</p>
      <p>{latestPost.album_id}</p>
      <audio controls src={latestPost.audio_url} />
    </div>
  );
}


export default LatestImage;
