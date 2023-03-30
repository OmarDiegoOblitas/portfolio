import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaFacebook } from"react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from"react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/omar-diego-oblitas-9380b71aa/" target="_blank" rel="noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/OmarDiegoOblitas" target="_blank" rel="noreferrer">
            <FaGithub />
        </a>
        <a href="https://dribbble.com/DiegoOmar" target="_blank" rel="noreferrer">
            <FiDribbble />
        </a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer">
            <FaFacebook />
        </a>
        <a href="https://twitter.com/OmarDiegoOblit1" target="_blank" rel="noreferrer">
            <FaTwitter />
        </a>
        <a href="https://www.instagram.com/omardiegooblitas/" target="_blank" rel="noreferrer">
            <FaInstagram />
        </a>
    </div>
  );
};

export default HeaderSocials;
