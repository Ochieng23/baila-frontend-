import React, { useState, useEffect } from "react";
import "./App.css"
import {
  FaTh,
  FaItunesNote,
  FaRegUserCircle,
  FaItunes,
  FaUserAstronaut,
  FaJsfiddle,
  FaGripHorizontal,
  FaBars,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://baila-backend.onrender.com/me")
      .then((response) => {
        if (response.ok) {
          setLoggedIn(true);
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    fetch("https://baila-backend.onrender.com/logout", { method: "DELETE" }).then(
      (response) => {
        if (response.ok) {
          setLoggedIn(false);
          navigate("/");
        }
      }
    );
  };

  const menuItem = [
    {
      path: loggedIn ? "#" : "/account",
      name: loggedIn ? 'Logout': "Login",
      icon: <FaRegUserCircle />,
      onClick: loggedIn ? handleLogout : null,
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
      
      name: user,
      icon: <FaGripHorizontal />,
    },
  ];

  return (
    <div className="top" >
      <div className="container">
        <div className="row position-sticky">
        <div className="sidebar  col-sm-12 col-md-6 col-lg-4 position-sticky" style={{ top: 0 }}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              BAILA
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
              onClick={item.onClick}
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
    </div>
  );
}

export default Sidebar;
