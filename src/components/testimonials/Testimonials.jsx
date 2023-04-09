import React from "react";
import "./testimonials.css";
import uab from "../../assets/uablogo.png";
import iteca from "../../assets/itecalogo.png";

const data = [
    {
      avatar: uab,
      link:"https://paginanueva.uab.edu.bo/",
      review: "Universidad Adventista de Bolivia",
    },
    {
        avatar: iteca,
        link:"https://iteca.edu.bo/webs/",
        review:"Instituto Tecnico de Educacion Comercial Americano",
    },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h5>academic training</h5>
        <h2 className="testimonial_title">Education</h2>
        <div className="container_testimonials_container">
            {data.map(({ avatar, name, review,link }, index) => {
                return (
                    <article key={index} className="testimonial">
                        <div className="client_avatar">
                            <img className="logoF" src={avatar} alt="avatar one" />
                        </div>
                        <li><a href={link} className="client_review">{review}</a></li>
                    </article>
                );
            })}
        </div>
    </section>
  );
};

export default Testimonials;
