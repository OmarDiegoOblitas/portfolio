import React from "react";
import CV from "../../assets/CV-2023.pdf"
import { Link } from 'react-scroll';


const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
        <Link to="contact" className="btn btn-primary" smooth={true} duration={500}>Let's Talk</Link>
    </div>
  );
};

export default CTA;
