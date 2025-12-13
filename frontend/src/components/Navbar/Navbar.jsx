import React, { useState } from "react";
import "./Navbar.css";
import { Search, ShoppingBasket, Menu, X } from "lucide-react";

const Navbar = () => {
  const [sweet, setSweet] = useState("false");
  const [sweetCount, setSweetCount] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="nav-left">
        <img src={"/assets/logo.png"} alt="logo" className="nav-logo" />
      </div>

      {/* Menu */}
      <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li onClick={() => setSweet("home")} className={sweet=="home" ? "active" : ""}>Home</li>
        <li onClick={() => setSweet("sweet")} className={sweet=="sweet" ? "active" : ""}>Sweets</li>
        <li onClick={() => setSweet("inventary")} className={sweet=="inventary" ? "active" : ""}>Inventary</li>
        <li onClick={() => setSweet("contact-us")} className={sweet=="contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      {/* Right Icons */}
      <div className="nav-right">
        
        <Search className="nav-icon" />

        <div className="basket-wrapper">
          <ShoppingBasket className="nav-icon" />
          {sweetCount > 0 && <div className="dot"></div>}
        </div>

        <button className="sign-in-btn">Sign In</button>

        {/* Hamburger / Close Icon */}
        {isMobileMenuOpen ? (
          <X className="nav-icon mobile-menu-icon" onClick={() => setIsMobileMenuOpen(false)} />
        ) : (
          <Menu className="nav-icon mobile-menu-icon" onClick={() => setIsMobileMenuOpen(true)} />
        )}
      </div>

    </nav>
  );
};

export default Navbar;
