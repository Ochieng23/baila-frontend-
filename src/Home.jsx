import React from 'react'
import { createContext, useState } from "react";
import FileForm from "./FileForm";
import LatestImage from "./LatestImage";
import Navbar from './Navbar';
import SongList from './SongList';

export const AppContext = createContext(null);

function Home() {
    const [latestPost, setLatestPost] = useState(AppContext);
  return (

    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <div className='container' style={{maxHeight: "100vh",maxWidth:"100vw"}}>
     <div className='row'>
      <div  className="col-sm-12 col-md-6 col-lg-4">
      <SongList/>
      </div>
      </div>
    </div>
  </AppContext.Provider>
  )
}

export default Home