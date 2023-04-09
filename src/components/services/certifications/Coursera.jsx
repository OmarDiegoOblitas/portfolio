import React, {useState} from 'react';
import {BiCheck} from "react-icons/bi";
import "../services.css"

const certificationC=[
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
    }
]

const Coursera = () => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {setShowAll(!showAll);};
    const certificationList = showAll ? certificationC : [certificationC[0]];

    return (
        <div>
            {!showAll && (
                <ul className="services_list">
                    <div>
                        <li>
                            <span className="service_list-icon"><BiCheck /></span>
                            <a href={certificationC[0].url}>{certificationC[0].name}</a>
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

export default Coursera;