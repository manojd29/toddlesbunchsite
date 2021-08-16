import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Logo from "../assets/titlog.jpeg";
import Footer from '../pages/footer';




export default function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={Logo} class="Logo" style={{ width: "60px" }}></img>
      <p class="navbar-brand">Toddles Bunch</p>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#courses">Courses</a>
          <a href="">Blogs</a>
          <a href="/">Shop</a>
          <a href="/#contact">Contact</a>
        </nav>
      </CSSTransition>
      <button type="button" onClick={toggleNav} class="Burger">
        <span class="bubutton">≣</span>
      </button>
    </header>
  );
}
