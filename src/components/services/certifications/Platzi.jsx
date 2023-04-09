import React, {useState} from 'react';
import {BiCheck} from "react-icons/bi";
import "../services.css"

const certificationP = [
    {
        id: 1,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/1272-sql-mysql/diploma/detalle/",
        name:"Curso de SQL y MySQL"
    },
    {
        id: 2,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2556-react-native/diploma/detalle/",
        name:"Curso de Introducción a React Native"
    },
    {
        id: 3,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2444-react/diploma/detalle/",
        name:"Curso de Introducción a React.js"
    },
    {
        id: 4,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2878-typescript/diploma/detalle/",
        name:"Curso de Fundamentos de TypeScript"
    },
    {
        id: 5,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/1814-basico-javascript/diploma/detalle/",
        name:"Curso Básico de JavaScript"
    },
    {
        id: 6,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/5316-nodejs-graphql/diploma/detalle/",
        name:"Curso de GraphQL con Node.js"
    },
    {
        id: 7,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2478-angular/diploma/detalle/",
        name:"Curso de Fundamentos de Angular"
    },
    {
        id: 8,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/1689-nodejs-mongo-websockets/diploma/detalle/",
        name:"Curso de Node.js: Base de Datos con MongoDB y WebSockets"
    },
    {
        id: 9,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2066-docker/diploma/detalle/",
        name:"Curso de Docker"
    },
    {
        id: 10,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2337-animaciones-css/diploma/detalle/",
        name:"Curso de Animaciones con CSS"
    },

    {
        id: 11,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/6935-ai/diploma/detalle/",
        name:"Curso Gratis de Inteligencia Artificial: ChatGPT, DALL-E y Hugging Face"
    },
    {
        id: 12,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2518-productividad-startups/diploma/detalle/",
        name:"Productividad y Manejo del Tiempo para Startups"
    },
    {
        id: 13,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/1474-oop/diploma/detalle/",
        name:"Curso de Programación Orientada a Objetos: POO"
    },
    {
        id: 14,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2042-prework-windows/diploma/detalle/",
        name:"Curso de Prework: Configuración de Entorno de Desarrollo en Windows"
    },
    {
        id: 15,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/4623-arquitectura-frontend/diploma/detalle/",
        name:"Audiocurso de Frameworks y Arquitecturas Frontend: Casos de Estudio"
    },
    {
        id: 16,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2499-optimizacion-perfil-linkedin/diploma/detalle/",
        name:"Curso de Optimización del Perfil de LinkedIn"
    },
    {
        id: 17,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/3577-nft/diploma/detalle/",
        name:"Curso de Creación de NFT"
    },
    {
        id: 18,
        check: <BiCheck/>,
        url:"https://platzi.com/p/omar79521audi/curso/2451-bitcoin-blockchain/diploma/detalle/",
        name:"Curso de Bitcoin y Blockchain"
    }
    ]

const Platzi = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {setShowAll(!showAll);};
    const certificationList = showAll ? certificationP : [certificationP[0]];

    return (
        <div>
            {!showAll && (
                <ul className="services_list">
                    <div>
                        <li>
                            <span className="service_list-icon"><BiCheck /></span>
                            <a href={certificationList[0].url}>{certificationList[0].name}</a>
                        </li>
                    </div>
                    <button className="btn btn-primary" onClick={toggleShowAll}>View More +</button>
                </ul>
            )}
            {showAll && (
                <ul className="services_list">
                    {certificationList.map(({ id, check, name, url }) => (
                        <div key={id}>
                            <li>
                                <span className="service_list-icon">{check}</span>
                                <a href={url}>{name}</a>
                            </li>
                        </div>
                    ))}
                    <button className="btn btn-primary" onClick={toggleShowAll}>See Less -</button>
                </ul>
            )}
        </div>
    );
};


export default Platzi;