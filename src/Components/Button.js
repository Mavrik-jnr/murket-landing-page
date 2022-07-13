import "../Css/button.css";
import React from "react";

function Button({ variant, text }) {
  return (
    <button className={variant ? variant + " button" : "button"}>{text}</button>
  );
}

export default Button;
