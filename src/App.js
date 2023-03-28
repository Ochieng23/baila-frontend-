
import './App.css';
import { createContext, useState } from "react";
import React from "react";
import FileForm from "./FileForm";
import LatestImage from "./LatestImage";
import SongList from './SongList';

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);
  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileForm />
        <LatestImage />
        <SongList/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
