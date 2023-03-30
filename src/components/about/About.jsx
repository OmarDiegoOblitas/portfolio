import React from "react";
import "./about.css";
import ME from "../../assets/avatar.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import {Link} from "react-scroll";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small></small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article>
          </div>
          <p>
            "Hello! I'm Omar, a final year student of Computer Engineering, focused on the Frontend Developer area.
            I have solid knowledge in technologies such as React, Nextjs, Ionic, Tailwind, MySql, JavaScript, HTML and CSS.
            I am skilled in the design and development of websites and applications,
            and I stand out for my ability to work in a team and solve problems effectively.
            If you are interested in learning more about my work, do not hesitate to contact me. I am at your disposal!"
          </p>
          <Link to="contact" className="btn btn-primary" smooth={true} duration={500}>Let's Talk</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
