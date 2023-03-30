import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { SiCoursera } from"react-icons/si"
import { SiPlatzi } from"react-icons/si"
import { SiLinkedin } from"react-icons/si"

const Services = () => {
  return (
    <section id="services">
      {/*<h5>What I Offer</h5>*/}
      <h2>Certifications</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3><SiPlatzi/> Platzi</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2556-react-native/diploma/detalle/">Curso de Introducción a React Native</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2444-react/diploma/detalle/">Curso de Introducción a React.js</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2878-typescript/diploma/detalle/">Curso de Fundamentos de TypeScript</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/1272-sql-mysql/diploma/detalle/">Curso Práctico de SQL y MySQL</a>
            </li>
            <li>
              <BiCheck className="service_list-icon"/>
              <a href="https://platzi.com/p/omar79521audi/curso/1814-basico-javascript/diploma/detalle/">Curso Básico de JavaScript </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2337-animaciones-css/diploma/detalle/">Curso de Animaciones con CSS </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2451-bitcoin-blockchain/diploma/detalle/">Curso de Bitcoin y Blockchain </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/3577-nft/diploma/detalle/">Curso de Creación de NFT</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2518-productividad-startups/diploma/detalle/">Productividad y Manejo del Tiempo para Startups </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://platzi.com/p/omar79521audi/curso/2499-optimizacion-perfil-linkedin/diploma/detalle/">Curso de Optimización del Perfil de LinkedIn</a>
            </li>
          </ul>
        </article>
        {/* END of UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3><SiCoursera/> Coursera</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://coursera.org/share/8227fc3baabf40c5d59634fedfff3d03">React Basics</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://coursera.org/share/3b4b9dd220f7b9cf895bbadbccb051d2">Version Control</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://coursera.org/share/26bf41143f614fc9ae089bba43b451cb">Programming with JavaScript</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://coursera.org/share/0e941f0db67db9987438bc21491894f7">HTML and CSS in depth</a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://coursera.org/share/38f9e8063f9cb0c18714828b6302c73e">Introduction to Front-End Development
              </a>
            </li>
          </ul>
        </article>
        {/* Web Develoment */}
        <article className="service">
          <div className="service_head">
            <h3><SiLinkedin/> Linkedin</h3>
          </div>

          <ul className="services_list">
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/42fe2d464b25df4b8d2791d32f2d3b46db7fb6c5c53178ae0a8bdde3d1711b59">Liderazgo para el desarrollo de proyectos de software
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/10d785b90f9975d4771d2482ef592734541bc6c280535878a7240761cd894f27">JavaScript Avanzado 2
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/c0c28c3cdb166e2effe01173b8289853d5287578f1f685c0678c8b97d2ccb6df">Pruebas de software y QA
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/10ced6d884fd8cf7f791c1e971efc5c1c1f2459a792b3b542e6d3cb52f15994b">Bases de datos
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/be93ae0ccec9a0c89341c7ae093bf0c93c20f844b527803f67d1f7564a6cfe75">Fundamentos de AWS Cloud Services
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/a9361362ad1dcf80432d85e50d032aa84b20921712d48a0f22fb49c41b7c93b4">DevOps esencial
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/b9eea7d3d6596696e9daa810d4e7c90aa52ae928dedd422014397945680740fb">Emprendimiento, liderazgo y salud mental
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/f3252132fc7f18e67196c038ad2668a08f065df2618976d8d7a773d9a7b31e65">Arquitectura de software: De desarrollador a arquitecto o arquitecta
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/09d0ac12c0f9a3b7563bea318fe5572fb419086c3907ec0f52902e96df8f1724">data science: Conceptos básicos
              </a>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <a href="https://www.linkedin.com/learning/certificates/d655b543505121d30ab4a22bf2830d759131618141096d87709a479e1bd8e1ef">Amazon Web Services para profesionales IT
              </a>
            </li>
          </ul>
        </article>
        {/* END of content creation */}
      </div>
    </section>
  );
};

export default Services;
