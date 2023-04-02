
import './App.css';
import Sidebar from './Sidebar'
import { Routes,Route } from 'react-router-dom';
import React from "react";
import Home from './Home';
import Trending from './Trending';
import Latest from './Latest';
import Artist from './Artist';
import Playlists from './Playlists';
import Podcasts from './Podcasts';
import Genres from './Genres';
import Album from './Album';
import Account from './Account'



function App() {
 
  return (

    <div className='App container' style={{backgroundColor:"black"}}>
     
    
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/latest' element={<Latest/>}/>
      <Route path='/artists' element={<Artist/>}/>
      <Route path='/playlists' element={<Playlists/>}/>
      <Route path='/genres' element={<Genres/>}/>
      <Route path='/podcasts' element={<Podcasts/>}/>
      <Route path='/album' element={<Album/>}/>
      <Route path='/account' element={<Account/>}/>
    </Routes>
    
    
    </div>
  );
}

export default App;
