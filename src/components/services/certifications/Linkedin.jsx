import React, {useState} from 'react';
import {BiCheck} from "react-icons/bi";
import "../services.css"

 const certificationL=[
     {
         id: 1,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/e3c7cfb19894f9d600d2daea88c9525d594a58662a7a9ef127206edff8893985",
         name: "Angular esencial"
     },
     {
         id: 2,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/1e3ef442885d16ab39186930675b87f60b535de8885de67cd404596a7a674485",
         name: "Vue avanzado 2"
     },
     {
         id: 3,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/1b1966c880a74db9258eeb3cdfdd85b95b1110efd25ec0bfc3b7ddb1802a744a",
         name: "Vue avanzado 1"
     },
     {
         id: 4,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/678d1a3aaf07f8b8a2bc6642952fc7ddb3e71f5b088e15d1e07ec143985497f5",
         name: "React Hooks esencial"
     },
     {
         id: 5,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/c3c77aa7009a2d36aeb4daae796f3a6774fa5a990a59f5011350749aded54e5e",
         name: "React avanzado 2"
     },
     {
         id: 6,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/f00915b1887209f98fd2ac5a9dd09b7061dde0344cfb329165e002841be8b848",
         name: "React avanzado 1 "
     },
     {
         id: 7,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/4e60b51218c7b1982b9b68f6b88ec97c320eefdb7d22e72812ab9652fd6b1a81",
         name: "TypeScript avanzado"
     },
     {
         id: 8,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/03f7ce25bd7eec5bc9bf8a452abadd0dd84e286ea8727a7606ede930f36de2b7",
         name: "TypeScript esencial"
     },
     {
         id: 9,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/10d785b90f9975d4771d2482ef592734541bc6c280535878a7240761cd894f27",
         name: "JavaScript Avanzado 2"
     },
     {
         id: 10,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/3dadb7ba14165b29d59e810623f0de9dac567b397874e67fbb0c11cc3a277958",
         name: "JavaScript"
     },
     {
         id: 11,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/37f90d6181aacebb059a9d2e2f4c3f8c099a6530980abe9bebb7beee042dcfc9",
         name: " JavaScript básico"
     },
     {
         id: 12,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/b6d8965b2302934f63bd35030d360176127165532abb55c520764c5c00210e4c",
         name: "Azure Diseño e implementación de soluciones DevOps de Microsoft"
     },
     {
         id: 13,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/d655b543505121d30ab4a22bf2830d759131618141096d87709a479e1bd8e1ef",
         name: "Amazon Web Services para profesionales IT"
     },
     {
         id: 14,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/be93ae0ccec9a0c89341c7ae093bf0c93c20f844b527803f67d1f7564a6cfe75",
         name: "Fundamentos de AWS Cloud Services"
     },
     {
         id: 15,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/aceca7e056820fa6e6adc476561730a1028489641c50ad5f88c94cb4c9a2d763",
         name: "GitHub para programadores"
     },
     {
         id: 16,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/a0d150c0d0a4253f1dac60e9ff1d44871d2e0a30f01ed210960ff5b58fcf9025",
         name: "MongoDB esencial"
     },
     {
         id: 17,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/10ced6d884fd8cf7f791c1e971efc5c1c1f2459a792b3b542e6d3cb52f15994b",
         name: "Bases de datos"
     },
     {
         id: 18,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/c0c28c3cdb166e2effe01173b8289853d5287578f1f685c0678c8b97d2ccb6df",
         name: "Pruebas de software y QA"
     },
     {
         id: 19,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/a9361362ad1dcf80432d85e50d032aa84b20921712d48a0f22fb49c41b7c93b4",
         name: "DevOps esencial"
     },
     {
         id: 20,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/09d0ac12c0f9a3b7563bea318fe5572fb419086c3907ec0f52902e96df8f1724",
         name: "data science: Conceptos básicos"
     },
     {
         id: 21,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/442a4df01516017c8f556896b16f5b58d9da25bd0d8a05386fa3c83673dd858a",
         name: "Machine learning"
     },
     {
         id: 22,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/bfa10d34d838dc96915b30f2f108de2ec1c6915118c63038636d9c2117e78038",
         name: ".NET 7 esencial"
     },
     {
         id: 23,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/cebe539070eb8e90cf30113aae13b652342b13bb684e6e8c345ee0e318eaeb28ß",
         name: "Go esencial"
     },
     {
         id: 24,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/176aed46f77a1892b709cd4abd660da3b747e4ef293e1b10c28718518c3ae9e0",
         name: "Python esencial"
     },
     {
         id: 25,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/d44afa66875c77f1ca56d614a9168d308238e24df7f6fe9e7be4b9799cfb8465",
         name: "PHP esencial"
     },
     {
         id: 26,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/dde717009b1ab0814eb6eb1865e2a2175cca1941f98bd1c0b7c0657dd82cef87",
         name: "Fundamentos esenciales de la programación"
     },
     {
         id: 27,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/f3252132fc7f18e67196c038ad2668a08f065df2618976d8d7a773d9a7b31e65",
         name: "Arquitectura de software: De desarrollador a arquitecto o arquitecta"
     },
     {
         id: 28,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/42fe2d464b25df4b8d2791d32f2d3b46db7fb6c5c53178ae0a8bdde3d1711b59",
         name: "Liderazgo para el desarrollo de proyectos de software"
     },
     {
         id: 29,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/1faf8bc7d9b15ca3a4ed9f072275d3c3f6dedf19d9f32df3fdf5f499319c5fd8",
         name: "Cómo crear impacto: Claves para líderes conscientes"
     },
     {
         id: 30,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/de486eb981565208beaa7ccfad476c9e7372f38e481fef7d34bc5d80724b2a9e",
         name: "Potencia tu imagen de marca"
     },
     {
         id: 31,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/b9eea7d3d6596696e9daa810d4e7c90aa52ae928dedd422014397945680740fb",
         name: "Emprendimiento, liderazgo y salud mental"
     },
     {
         id: 32,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/ea6785c3f0705ff6b8933faec21536c09ca226347e38d9ee3e1c6b615afda96d",
         name: "habilidades profesionales en el desarrollo de software"
     },
     {
         id: 33,
         check: <BiCheck/>,
         url: "https://www.linkedin.com/learning/certificates/7d43abfca683d640beeddee06f43969d10c748fa82a6e7a17d781500140fb2f4",
         name: "Fundamentos de la gestión de proyectos: Requisitos"
     },
 ]
const Linkedin = () => {
    const [showAll, setShowAll] = useState(false);
    const toggleShowAll = () => {setShowAll(!showAll);};
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
                                <p>{id}</p>
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