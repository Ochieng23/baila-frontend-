import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Trending() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch("https://baila-backend.onrender.com/home")
      .then(res => res.json())
      .then(res => setTrends(res));
  }, []);

  return (
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {trends.map((trend, index) => (
         <div className="card" style={{ width: "15rem" }}>
         <img
           src={trend.image_url}
           alt={trend.name}
           style={{ width: "200px", height: "190px" }}
           className="card-img-top img-fluid"
         />
         <div className="card-body">
           <p
             className="card-text "
             style={{ color: "white", margin: "3px" }}
           >
             {trend.name}{" "}
           </p>
           <audio
             src={trend.audio_url}
             controls
             style={{ width: "200px", height: "" }}
           />
         </div>
       </div>
      ))}
    </div>
  );
}

export default Trending;

