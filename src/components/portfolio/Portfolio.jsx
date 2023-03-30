import React from "react";
import "./portfolio.css";
import img1 from "../../assets/restauantA.png";
import img2 from "../../assets/portfolio4.png";
import img3 from "../../assets/m_merged.png";
import img4 from "../../assets/socialJS.png";
import img5 from "../../assets/portfolio1.png";
import img6 from "../../assets/ApiA.png";
import { SiTailwindcss,SiCss3,SiJavascript,SiAngular,SiNextdotjs,SiTypescript,SiSass }from"react-icons/si";
import { FaVuejs,FaReact } from"react-icons/fa"

const data = [
  {
    id: 1,
    image: img1,
    title: "Restaurant services website. For desktop",
    github: "https://project-uab.vercel.app/",
    demo: "https://dribbble.com",
    first:<SiSass/>,
    second:<SiTypescript/>,
    third: <SiAngular/>
  },
  {
    id: 2,
    image: img2,
    title: "website with statistics responsive with mobiles, dark mode.",
    github: "https://omardiegooblitas.github.io/WebStatistics/",
    demo: "https://dribbble.com",
    first: <SiCss3/>,
    second: <SiJavascript/>,
  },
  {
    id: 3,
    image: img3,
    title: "services and products of a restaurant",
    github: "https://restaurant-menu-seven.vercel.app/",
    demo: "https://dribbble.com",
    first:<SiTailwindcss/>,
    second:<SiJavascript/>,
    third: <SiNextdotjs/>
  },
  {
    id: 4,
    image: img4,
    title: "Customizable social network: adjust the color and text to your liking",
    github: "https://omardiegooblitas.github.io/Social-media-/",
    demo: "https://dribbble.com",
    first:<SiCss3/>,
    second:<SiJavascript/>,
    third: <FaReact/>
  },
  {
    id: 5,
    image: img5,
    title: "musical lyrics search engine",
    github: "https://omardiegooblitas.github.io/ProbandoVue.js/",
    demo: "https://dribbble.com",
    first:<SiCss3/>,
    second:<SiJavascript/>,
    third: <FaVuejs/>
  },
  {
    id: 6,
    image: img6,
    title: "consumption of an API in Angular.",
    github: "https://test-angular-delta.vercel.app/",
    demo: "https://dribbble.com",
    first:<SiSass/>,
    second:<SiTypescript/>,
    third: <SiAngular/>
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo,first,second,third }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="icon-tec">
                <span>{first}</span>
                <span>{second}</span>
                <span>{third}</span>
              </div>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">GitHub</a>
                <a href={demo} className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
