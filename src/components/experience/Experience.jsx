import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {FaPython,FaLaravel,FaPhp,FaNode,FaBootstrap,FaReact} from "react-icons/fa"
import {SiMysql, SiHtml5, SiCss3, SiTailwindcss, SiTypescript, SiJavascript, SiAngular, SiSass} from "react-icons/si"
import {SiNextdotjs,SiMongodb} from "react-icons/si"
import {ImGit} from "react-icons/im"


const frontend1 = [
  {
    id:1,
    tec:"Angular",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<SiAngular/>
  },
  {
    id:2,
    tec:"Next",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<SiNextdotjs/>
  },
  {
    id:3,
    tec:"React",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<FaReact/>
  },
  {
    id:4,
    tec:"TypeScript",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<SiTypescript/>
  },
  {
    id:5,
    tec:"JavaScript",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<SiJavascript/>
  }
]
const frontend2 = [
  {
    id:6,
    tec:"Bootstrap",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<FaBootstrap/>
  },
  {
    id:7,
    tec:"Tailwind",
    check:<BsPatchCheckFill/>,
    range:"Experiance",
    iconTec:<SiTailwindcss/>
  },
  {
    id:8,
    tec:"Sass",
    check:<BsPatchCheckFill/>,
    range:"Experiance",
    iconTec:<SiSass/>
  },
  {
    id:9,
    tec:"CSS",
    check:<BsPatchCheckFill/>,
    range:"Experiance",
    iconTec:<SiCss3/>
  },
  {
    id:10,
    tec:"HTML",
    check:<BsPatchCheckFill/>,
    range:"Experiance",
    iconTec:<SiHtml5/>
  }
]
const backend1 = [
  {
    id:1,
    check:<BsPatchCheckFill/>,
    tec:"Node JS",
    range:"Intermediate",
    iconTec:<FaNode/>
  },
  {
    id:2,
    tec:"PHP",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<FaPhp/>
  },
  {
    id:3,
    tec:"MySQL",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<SiMysql/>
  },
  {
    id:4,
    tec:"GIT",
    check:<BsPatchCheckFill/>,
    range:"Intermediate",
    iconTec:<ImGit/>
  }
]
const backend2 = [
  {
    id:1,
    check:<BsPatchCheckFill/>,
    tec:"Python",
    range:"Basic",
    iconTec:<FaPython/>
  },
  {
    id:2,
    tec:"Laravel",
    check:<BsPatchCheckFill/>,
    range:"Basic",
    iconTec:<FaLaravel/>
  },
  {
    id:3,
    tec:"MongoDB",
    check:<BsPatchCheckFill/>,
    range:"Basic",
    iconTec:<SiMongodb/>
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
              {frontend1.map(({ id,tec,range,check,iconTec}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon">{check}</span>
                      <span className="img_tec">{iconTec}</span>
                      <div className="experience_name">
                        <h4>{tec}</h4>
                        <small className="text-light">{range}</small>
                       </div>
                    </div>
                );
              })}
            </article>
            <article className="experience_details">
              {frontend2.map(({ id,tec,range,check,iconTec}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon">{check}</span>
                      <span className="img_tec">{iconTec}</span>
                      <div className="experience_name">
                        <h4>{tec}</h4>
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
              {backend1.map(({ id,tec,range,check,iconTec}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon">{check}</span>
                      <span className="img_tec">{iconTec}</span>
                      <div className="experience_name">
                        <h4>{tec}</h4>
                        <small className="text-light">{range}</small>
                      </div>
                    </div>
                );
              })}
            </article>
            <article className="experience_details">
              {backend2.map(({ id,tec,range,check,iconTec}) => {
                return(
                    <div key={id} className="experience_tec">
                      <span className="experience_details-icon" >{check}</span>
                      <span className="img_tec">{iconTec}</span>
                      <div className="experience_name">
                        <h4>{tec}</h4>
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
