import React from "react";
import "./services.css";
import { SiCoursera } from"react-icons/si";
import { SiPlatzi } from"react-icons/si";
import { SiLinkedin } from"react-icons/si";
import Linkedin from "./certifications/Linkedin"
import Platzi from "./certifications/Platzi";
import Coursera from "./certifications/Coursera";

function Services(){

return (
    <section>
        <h2>Certifications</h2>
        <div className="container services_container">
            <article className="service">
                <div className="service_head">
                    <h3><SiLinkedin/> Linkedin</h3>
                </div>
                <Linkedin/>
            </article>
            <article className="service">
                <div className="service_head">
                    <h3><SiPlatzi/>Platzi</h3>
                </div>
                <Platzi/>
            </article>
            <article className="service">
                <div className="service_head">
                    <h3><SiCoursera/> Coursera</h3>
                </div>
                <Coursera/>
            </article>
        </div>
    </section>
);
}

export default Services;

