import React from 'react'
import { createContext, useState } from "react";
import FileForm from "./FileForm";
import LatestImage from "./LatestImage";
import SongList from './SongList';

export const AppContext = createContext(null);

function Home() {
    const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
    <div className="App">
      {/* <FileForm />
      <LatestImage /> */}
      <SongList/>
    </div>
  </AppContext.Provider>
  )
}

export default Home