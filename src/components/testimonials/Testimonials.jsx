import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/profile1.jpg";

const data = [
  {
    avatar: AVTR1,
    name: "tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos fugit ratione delectus minus sed dolore eaque sequi voluptatem nulla, ullam eius rerum sapiente, tempora eum omnis doloribus? Et, facere illo.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
