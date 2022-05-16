import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio.png";
import img2 from "../../assets/portfolio1.png";
import img3 from "../../assets/portfolio5.png";
import img4 from "../../assets/portfolio3.png";
import img5 from "../../assets/portfolio4.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "component challenge in frontenMentor",
    github: "https://determined-davinci-7f2bb3.netlify.app/",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: img2,
    title: "musical lyrics search engine",
    github: "https://omardiegooblitas.github.io/ProbandoVue.js/",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: img3,
    title: "search github repositories",
    github: "https://omardiegooblitas.github.io/Probando_API/",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: img4,
    title: "website with statistics responsive with mobiles",
    github: "https://omardiegooblitas.github.io/WebStatistics/",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: img5,
    title: "cwebsite with statistics responsive with mobiles, dark mode.",
    github: "https://omardiegooblitas.github.io/WebStatistics/",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
