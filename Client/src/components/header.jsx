import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('/checkSession', { method: 'GET' });
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          setUserName(data.name); 
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
    const menu = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".header .navbar");

    if (menu && navbar) {
      menu.onclick = () => {
        menu.classList.toggle("fa-times");
        navbar.classList.toggle("active");
      };

      window.onscroll = () => {
        menu.classList.remove("fa-times");
        navbar.classList.remove("active");
      };
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/Logout', { method: 'POST' });
      if (response.ok) {
        setIsLoggedIn(false);
        setUserName("");
        navigate('/'); 
      } else {
        alert("Failed to log out.");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section className="header">
      <Link to="/" className="logo">
        travel.
      </Link>
      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/About">about</Link>
        <Link to="/Package">package</Link>
        <Link to="/Book">book</Link>
        {isLoggedIn ? (
          <div className="user-dropdown" class="btn">
            <button className="user-button" onClick={toggleDropdown}>
              {userName} <span className="arrow">▼</span>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/Profile">User Profile</Link>
                <Link to="/Bookings">Your Bookings</Link>
                <button onClick={handleLogout} class="btn">Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/Login" className="btn">
            Login
          </Link>
        )}
      </nav>
      <div id="menu-btn" className="fas fa-bars"></div>
    </section>
  );
};

export default Header;
