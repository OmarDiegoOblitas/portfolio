import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/avatar.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Omar Oblitas</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contac" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
