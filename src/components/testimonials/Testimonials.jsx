import React from "react";
import "./testimonials.css";
import uab from "../../assets/uablogo.png";
import iteca from "../../assets/itecalogo.png";

const data = [
  {
    avatar: uab,
    review: "Universidad Adventista de Bolivia",
  },
    {
        avatar: iteca,
        review:"Instituto Tecnico de Educacion Comercial Americano",
    },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>academic training</h5>
      <h2 className="testimonial_title">Education</h2>

      <div className="container_testimonials_container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client_avatar">
                <img className="logoF" src={avatar} alt="avatar one" />
              </div>
              <h5 className="client_name">{review}</h5>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
