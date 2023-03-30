import React, { useState, useEffect } from "react";
import { FaTh, FaItunesNote, FaRegUserCircle, FaItunes, FaUserAstronaut, FaJsfiddle, FaGripHorizontal, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
const [isOpen, setIsOpen] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
fetch('/me')
.then(response => {
if (response.ok) {
setLoggedIn(true);
}
})
}, []);

const toggle = () => setIsOpen(!isOpen);

const menuItem = [
{
path: "/account",
name: loggedIn ? "Logout" : "Login",
icon: <FaRegUserCircle />,
},
{
path: "/",
name: "Home",
icon: <FaTh />,
},
{
path: "/trending",
name: "Trending",
icon: <FaItunesNote />,
},
{
path: "/latest",
name: "Latest",
icon: <FaItunes />,
},
{
path: "/artists",
name: "Artists",
icon: <FaUserAstronaut />,
},
{
path: "/playlists",
name: "Playlists",
icon: <FaJsfiddle />,
},
{
path: "/genres",
name: "Genres",
icon: <FaGripHorizontal />,
},
{
path: "/album",
name: "Album",
icon: <FaGripHorizontal />,
},
{
path: "/podcasts",
name: "Podcasts",
icon: <FaGripHorizontal />,
}

];
return (
<div className="top">
<div className="container">
<div className="sidebar">
<div className="top_section">
<h1 style={{display: isOpen ? "block" : "none"}} className="logo">BAILA</h1>
<div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
<FaBars onClick={toggle}/>
</div>
</div>
{menuItem.map((item, index) => (
<NavLink
         to={item.path}
         key={index}
         className="link"
         activeClassName="active"
       >
<div className="icon">{item.icon}</div>
<div
style={{ display: isOpen ? "block" : "none" }}
className="link_text"
>
{item.name}
</div>
</NavLink>
))}
</div>
<main>{children}</main>
</div>
</div>
);
}

export default Sidebar;