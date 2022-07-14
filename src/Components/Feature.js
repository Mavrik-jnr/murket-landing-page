import React from "react";
import "../Css/Feature.css";

function Feature({ icon, title, text }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__header">
          <img src={icon} alt="" className="card__content__header__icon" />
          <h5 className="card_content_header_title">{title}</h5>
        </div>

        <h6 className="card__content__text">{text}</h6>
      </div>
    </div>
  );
}

export default Feature;
