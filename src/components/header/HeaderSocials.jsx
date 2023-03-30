import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaFacebook } from"react-icons/fa"
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from"react-icons/fa"

const HeaderSocials = () => {
    const social = [
        {
            id:1,
            url:"https://www.linkedin.com/in/omar-diego-oblitas-9380b71aa/",
            icon:<BsLinkedin/>
        },
        {
            id:2,
            url:"https://github.com/OmarDiegoOblitas",
            icon:<FaGithub />
        },
        {
            id:3,
            url:"https://www.facebook.com/omardiego.oblitas/",
            icon:<FaFacebook />
        },
        {
            id:4,
            url:"https://twitter.com/OmarDiegoOblit1",
            icon:<FaTwitter />
        },
        {
            id:5,
            url:"https://www.instagram.com/omardiegooblitas/",
            icon: <FaInstagram />
        },
        {
            id:6,
            url:"https://dribbble.com/DiegoOmar",
            icon:<FiDribbble />
        }
    ]
  return (
      <div className="header_socials">{social.map(({ id, url, icon }) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
              {icon}
          </a>
      ))}
      </div>
  );
};

export default HeaderSocials;
