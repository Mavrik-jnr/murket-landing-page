import React from "react";
import "../Css/Testimonial.css";
import Star from "../assets/stars.svg";

function Testimonial({ text, img, person_name, person_title }) {
  return (
    <div className="card-T">
      <img src={Star} className="card-T__rating" />

      <h6 className="card-T__comment">{text}</h6>
      <div className="card-T__profile">
        <img src={img} alt="" className="card-T__profile__image" />
        <div className="card-T__profile__info">
          <h6 className="card-T__profile__info__name">{person_name}</h6>
          <h6 className="card-T__profile__info__title">{person_title}</h6>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
