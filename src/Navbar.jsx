import React from 'react';
import { FaSistrix } from 'react-icons/fa';

function Navbar({search,setSearch}) {
  const handleSearch = (event) => {
    setSearch(event.target.value)
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '8vh', margin: '3px' }}>
      <div className="search-container" style={{ display: 'flex', alignItems: 'center',margin:"5px" }}>
        <input
          id="searchInput"
          type="text"
          value={search}
          placeholder="Search"
          onChange={handleSearch}
          className="mb-3 mx-2 mt-5 rounded icon-input"
          style={{ width: "200px", height: "4vh", borderRadius:"10px", textAlign: "center" }}
        />
        <label htmlFor="searchInput"><FaSistrix /></label>
      </div>
      <div >
        <img className='img-fluid' src='https://www.freepnglogos.com/uploads/app-store-logo-png/google-play-and-apple-app-store-logos-22.png' alt='img' style={{height:"7vh",marginRight:"20px", width:"300px"}}/>
      </div>
    </div>
  );
}

export default Navbar;
