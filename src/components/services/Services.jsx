import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Desing</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
          </ul>
        </article>
        {/* Web Develoment */}
        <article className="service">
          <div className="service_head">
            <h3>Conten Creation</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              </p>
            </li>
          </ul>
        </article>
        {/* END of content creation */}
      </div>
    </section>
  );
};

export default Services;
