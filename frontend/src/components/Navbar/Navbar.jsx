import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Search, ShoppingBasket, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Left Side */}
      <div className="nav-left">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="nav-logo" />
        </Link>
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            setIsMobileMenuOpen(false);
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            setIsMobileMenuOpen(false);
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>

        <a
          href="#app-download"
          onClick={() => {
            setMenu("mob-app");
            setIsMobileMenuOpen(false);
          }}
          className={menu === "mob-app" ? "active" : ""}
        >
          mobile app
        </a>

        <a
          href="#footer"
          onClick={() => {
            setMenu("contact");
            setIsMobileMenuOpen(false);
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>

      {/* Right Icons */}
      <div className="nav-right">
        <Search className="nav-icon" />

        <Link to="/cart" className="basket-wrapper">
          <ShoppingBasket className="nav-icon" />
          {getTotalCartAmount() > 0 && <div className="dot"></div>}
        </Link>

        {!token ? (
          <button className="sign-in-btn" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <span className="profile-text" onClick={() => navigate("/myorders")}>
              Orders
            </span>
            <span className="profile-text" onClick={logout}>
              Logout
            </span>
          </div>
        )}

        {/* Mobile Menu Icon */}
        {isMobileMenuOpen ? (
          <X
            className="nav-icon mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <Menu
            className="nav-icon mobile-menu-icon"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
