import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import {Link} from "react-scroll";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
        <Link
            to="root"
            smooth={true}
            duration={500}
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active my-link" : "my-link"}
        >
            <AiOutlineHome />
        </Link>
        <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active my-link" : "my-link"}
        >
            <AiOutlineUser />
        </Link>

        <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active my-link" : "my-link"}
        >
            <BiBook />
        </Link>
        <Link
            to="portfolio"
            smooth={true}
            duration={500}
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio " ? "active my-link" : "my-link"}
        >
            <RiServiceLine />
        </Link>
        <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active my-link" : "my-link"}
        >
            <BiMessageSquareDetail />
        </Link>
    </nav>
  );
};

export default Nav;
