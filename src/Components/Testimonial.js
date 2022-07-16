import React from "react";
import "../Css/Testimonial.css";

function Testimonial() {
  return (
    <div className="card-T">
      <div className="card-T__rating">ggggg</div>
      <h6 className="card-T__comment">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
        neque maiores recusandae eos beatae, ipsa saepe et ullam inventore natus
        enim voluptatum nam cum quos laboriosam est quas praesentium tenetur!
      </h6>
      <div className="card-T__profile">
        <img src="" alt="" className="card-T__profile__image" />
        <div className="card-T__profile__info">
          <h6 className="card-T__profile__info__name">Lawal Adeogun</h6>
          <h6 className="card-T__profile__info__title">CEO of Akara</h6>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
