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

  if (!latestPost) {
    return <div>Loading latest post...</div>;
  }

  return (
    <div >
      <img src={latestPost.image_url} alt="latest post" className="latest-image" />
      <p>{latestPost.name}</p>
      <p>{latestPost.length}</p>
      <p>{latestPost.album_id}</p>
      <audio controls src={latestPost.audio_url} />
    </div>
  );
}

export default LatestImage;
