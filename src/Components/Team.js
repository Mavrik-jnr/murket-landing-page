import React from "react";
import "../Css/Team.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

function Team({ img, name, title }) {
  return (
    <div className="founder">
      <img src={img} alt="founder" />
      <div className="founder__content">
        <div className="founder__content__info">
          <h5 className="founder__content__info__name">{name}</h5>
          <h6 className="founder__content__info__title">{title}</h6>
          <div className="founder__content__info__social-links">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
