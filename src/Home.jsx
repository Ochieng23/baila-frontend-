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
    <div className="App">
     
      <SongList/>
    </div>
  </AppContext.Provider>
  )
}

export default Home