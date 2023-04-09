import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const frontend1 = [
  {
    id:1,
    check:<BsPatchCheckFill/>,
    tec:"Angular",
    range:"Intermediate"
  },
  {
    id:2,
    tec:"Next",
    check:<BsPatchCheckFill/>,
    range:"Basic"
  },
  {
    id:3,
    tec:"React",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  },
  {
    id:4,
    tec:"TypeScript",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  },
  {
    id:5,
    tec:"JavaScript",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  }
]
const frontend2 = [
  {
    id:6,
    tec:"Bootstrap",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  },
  {
    id:7,
    tec:"Tailwind",
    check:<BsPatchCheckFill/>,
    range:"Experiance"
  },
  {
    id:8,
    tec:"Sass",
    check:<BsPatchCheckFill/>,
    range:"Experiance"
  },
  {
    id:9,
    tec:"CSS",
    check:<BsPatchCheckFill/>,
    range:"Experiance"
  },
  {
    id:10,
    tec:"HTML",
    check:<BsPatchCheckFill/>,
    range:"Experiance"
  }
]
const backend1 = [
  {
    id:1,
    check:<BsPatchCheckFill/>,
    tec:"Node JS",
    range:"Intermediate"
  },
  {
    id:2,
    tec:"PHP",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  },
  {
    id:3,
    tec:"MySQL",
    check:<BsPatchCheckFill/>,
    range:"Intermediate"
  }
]
const backend2 = [
  {
    id:1,
    check:<BsPatchCheckFill/>,
    tec:"Python",
    range:"Basic"
  },
  {
    id:2,
    tec:"Laravel",
    check:<BsPatchCheckFill/>,
    range:"Basic"
  }
]
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div>
          <h3>frontend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              {frontend1.map(({ id,tec,range,check}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon" >{check}</span>
                       <div>
                         <h4 >{tec}</h4>
                         <small className="text-light">{range}</small>
                       </div>
                    </div>
                );
              })}
            </article>
            <article className="experience_details">
              {frontend2.map(({ id,tec,range,check}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon" >{check}</span>
                      <div>
                        <h4 >{tec}</h4>
                        <small className="text-light">{range}</small>
                      </div>
                    </div>
                );
              })}
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div>
          <h3>Backend Developer</h3>
          <div className="experience_content">
            <article className="experience_details">
              {backend1.map(({ id,tec,range,check}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon" >{check}</span>
                      <div>
                        <h4 >{tec}</h4>
                        <small className="text-light">{range}</small>
                      </div>
                    </div>
                );
              })}
            </article>
            <article className="experience_details">
              {backend2.map(({ id,tec,range,check}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon" >{check}</span>
                      <div>
                        <h4 >{tec}</h4>
                        <small className="text-light">{range}</small>
                      </div>
                    </div>
                );
              })}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
