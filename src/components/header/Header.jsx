import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/avatar.png";
import HeaderSocials from "./HeaderSocials";
import {Link} from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Omar Diego Oblitas</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <Link to="contact" className="scroll_down" smooth={true} duration={500}>Scroll Down</Link>
      </div>
    </header>
  );
};

export default Header;
