import React, {useState} from 'react';
import {BiCheck} from "react-icons/bi";
import "../services.css"

 const certificationL=[
     {
         id: 1,
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
         url: "https://www.linkedin.com/learning/certificates/a9361362ad1dcf80432d85e50d032aa84b20921712d48a0f22fb49c41b7c93b4",
         name: "DevOps esencial"
     },
     {
         id: 6,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/09d0ac12c0f9a3b7563bea318fe5572fb419086c3907ec0f52902e96df8f1724",
         name: "data science: Conceptos básicos"
     },
     {
         id: 7,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/d655b543505121d30ab4a22bf2830d759131618141096d87709a479e1bd8e1ef",
         name: "Amazon Web Services para profesionales IT"
     },
     {
         id: 8,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/be93ae0ccec9a0c89341c7ae093bf0c93c20f844b527803f67d1f7564a6cfe75",
         name: "Fundamentos de AWS Cloud Services"
     },
     {
         id: 9,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/442a4df01516017c8f556896b16f5b58d9da25bd0d8a05386fa3c83673dd858a",
         name: "Machine learning"
     },
     {
         id: 10,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/f3252132fc7f18e67196c038ad2668a08f065df2618976d8d7a773d9a7b31e65",
         name: "Arquitectura de software: De desarrollador a arquitecto o arquitecta"
     },
     {
         id: 11,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/7d43abfca683d640beeddee06f43969d10c748fa82a6e7a17d781500140fb2f4",
         name: "Fundamentos de la gestión de proyectos: Requisitos"
     },
     {
         id: 12,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/42fe2d464b25df4b8d2791d32f2d3b46db7fb6c5c53178ae0a8bdde3d1711b59",
         name: "Liderazgo para el desarrollo de proyectos de software"
     },
     {
         id: 13,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/1faf8bc7d9b15ca3a4ed9f072275d3c3f6dedf19d9f32df3fdf5f499319c5fd8",
         name: "Cómo crear impacto: Claves para líderes conscientes"
     },
     {
         id: 14,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/b9eea7d3d6596696e9daa810d4e7c90aa52ae928dedd422014397945680740fb",
         name: "Emprendimiento, liderazgo y salud mental"
     }
 ]
const Linkedin = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    const certificationList = showAll ? certificationL : [certificationL[0]];

    return (
        <div>
            {!showAll && (
                <ul className="services_list">
                    <div>
                        <li><span className="service_list-icon"><BiCheck /></span>
                            <a href={certificationL[0].url}>{certificationL[0].name}</a>
                        </li>
                    </div>
                    <button className="btn btn-primary" onClick={toggleShowAll}>View More +</button>
                </ul>
            )}
            {showAll && (
                <ul className="services_list">
                    {certificationList.map(({ id, check, name, url }) => (
                        <div key={id}>
                            <li><span className="service_list-icon">{check}</span>
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

export default Linkedin;