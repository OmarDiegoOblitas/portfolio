import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { SiCoursera } from"react-icons/si"
import { SiPlatzi } from"react-icons/si"
import { SiLinkedin } from"react-icons/si"

const Platzi=[
  {
    id:1,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2556-react-native/diploma/detalle/",
    name:"Curso de Introducción a React Native"
  },
  {
    id:2,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2444-react/diploma/detalle/",
    name:"Curso de Introducción a React.js"
  },
  {
    id:3,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2878-typescript/diploma/detalle/",
    name:"Curso de Fundamentos de TypeScript"
  },
  {
    id:4,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/1272-sql-mysql/diploma/detalle/",
    name:"Curso Práctico de SQL y MySQL"
  }
  ,{
    id:5,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/1814-basico-javascript/diploma/detalle/",
    name:"Curso Básico de JavaScript"
  }
  ,{
    id:6,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2337-animaciones-css/diploma/detalle/",
    name:"Curso de Animaciones con CSS"
  }
  ,{
    id:7,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2451-bitcoin-blockchain/diploma/detalle/",
    name:"Curso de Bitcoin y Blockchain"
  }
  ,{
    id:8,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/3577-nft/diploma/detalle/",
    name:"Curso de Creación de NFT"
  }
  ,{
    id:9,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2518-productividad-startups/diploma/detalle/",
    name:"Productividad y Manejo del Tiempo para Startups"
  }
  ,{
    id:10,
    check: <BiCheck/>,
    url:"https://platzi.com/p/omar79521audi/curso/2499-optimizacion-perfil-linkedin/diploma/detalle/",
    name:"Curso de Optimización del Perfil de LinkedIn"
  }
];
const Coursera=[
  {
    id:1,
    check: <BiCheck/>,
    url:"https://coursera.org/share/8227fc3baabf40c5d59634fedfff3d03",
    name:"React Basics"
  },
  {
    id:2,
    check: <BiCheck/>,
    url:"https://coursera.org/share/3b4b9dd220f7b9cf895bbadbccb051d2",
    name:"Version Control"
  },
  {
    id:3,
    check: <BiCheck/>,
    url:"https://coursera.org/share/26bf41143f614fc9ae089bba43b451cb",
    name:"Programming with JavaScript"
  },
  {
    id:4,
    check: <BiCheck/>,
    url:"https://coursera.org/share/0e941f0db67db9987438bc21491894f7",
    name:"HTML and CSS in depth"
  },
  {
    id:5,
    check: <BiCheck/>,
    url:"https://coursera.org/share/38f9e8063f9cb0c18714828b6302c73e",
    name:"Introduction to Front-End Development"
  },
]
const Linkedin=[
    {
      id:1,
      check: <BiCheck/>,
      url: "https://www.linkedin.com/learning/certificates/03f7ce25bd7eec5bc9bf8a452abadd0dd84e286ea8727a7606ede930f36de2b7",
      name: "TypeScript esencial"
    },
  {
    id: 2,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/10d785b90f9975d4771d2482ef592734541bc6c280535878a7240761cd894f27",
    name: "JavaScript Avanzado 2"
  },
  {
    id: 3,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/c0c28c3cdb166e2effe01173b8289853d5287578f1f685c0678c8b97d2ccb6df",
    name: "Pruebas de software y QA"
  },
  {
    id: 4,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/10ced6d884fd8cf7f791c1e971efc5c1c1f2459a792b3b542e6d3cb52f15994b",
    name: "Bases de datos"
  },
  {
    id: 5,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/be93ae0ccec9a0c89341c7ae093bf0c93c20f844b527803f67d1f7564a6cfe75",
    name: "Fundamentos de AWS Cloud Services"
  },
  {
    id: 6,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/a9361362ad1dcf80432d85e50d032aa84b20921712d48a0f22fb49c41b7c93b4",
    name: "DevOps esencial"
  },
  {
    id: 7,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/f3252132fc7f18e67196c038ad2668a08f065df2618976d8d7a773d9a7b31e65",
    name: "Arquitectura de software: De desarrollador a arquitecto o arquitecta"
  },
  {
    id: 8,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/09d0ac12c0f9a3b7563bea318fe5572fb419086c3907ec0f52902e96df8f1724",
    name: "data science: Conceptos básicos"
  },
  {
    id: 9,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/d655b543505121d30ab4a22bf2830d759131618141096d87709a479e1bd8e1ef",
    name: "Amazon Web Services para profesionales IT"
  },
  {
    id: 10,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/42fe2d464b25df4b8d2791d32f2d3b46db7fb6c5c53178ae0a8bdde3d1711b59",
    name: "Liderazgo para el desarrollo de proyectos de software"

  },
  {
    id: 11,
    check: <BiCheck/>,
    url: "https://www.linkedin.com/learning/certificates/b9eea7d3d6596696e9daa810d4e7c90aa52ae928dedd422014397945680740fb",
    name: "Emprendimiento, liderazgo y salud mental"

  },
]
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
            {Platzi.map(({id,check,name,url})=>{
              return(
                  <div key={id}>
                    <li><span className="service_list-icon">{check}</span><a href={url}>{name}</a></li>
                  </div>)
            })}
          </ul>
        </article>
        {/* END of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3><SiCoursera/> Coursera</h3>
          </div>
          <ul className="services_list">
            {Coursera.map(({id,check,name,url})=>{
              return(
                  <div key={id}>
                    <li><span className="service_list-icon">{check}</span><a href={url}>{name}</a></li>
                  </div>)
            })}
          </ul>
        </article>
        {/* Web Develoment */}
        <article className="service">
          <div className="service_head">
            <h3><SiLinkedin/> Linkedin</h3>
          </div>
          <ul className="services_list">
            {Linkedin.map(({id,check,name,url})=>{
              return(
                  <div key={id}>
                    <li><span className="service_list-icon">{check}</span><a href={url}>{name}</a></li>
                  </div>)
            })}
          </ul>
        </article>
        {/* END of content creation */}
      </div>
    </section>
  );
};

export default Services;
