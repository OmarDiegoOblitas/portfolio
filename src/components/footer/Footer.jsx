import React from "react";
import "./footer.css";
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from "react-icons/fa";
import { BsLinkedin} from "react-icons/bs"


const Footer = () => {
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
    ]
  return (
      <footer>
          <li><a href="/#" className="footer_logo">Omar</a></li>
          <ul className="permalinks">
              <li><a href="/#">Home</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/#certifications">Certifications</a></li>
              <li><a href="/#contact">Contact</a></li>
          </ul>
              {/*
              <li><a href="#testimonials">Testimonials</a></li>
              */}
          <div className="footer_socials">{social.map(({ id, url, icon }) => (
              <a key={id} href={url} target="_blank" rel="noreferrer">
                  {icon}
              </a>
          ))}
          </div>
          <div className="footer_copyright">
              <small>&copy; Omar Diego Oblitas. All rights reserved.</small>
          </div>
      </footer>
  );
};

export default Footer;
