import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/10/netflix-logo.png?fit=895%2C559"
          alt=""
        />

        <img
          className="nav_avatar"
          src="https://www.shareicon.net/data/2015/09/20/104335_avatar_512x512.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
