import React from "react";

function FormInput({ inputName, value }) {
  return (
    <div className="FormInput">
      <input type="text" id={inputName} placeholder={inputName} value={value} />
    </div>
  );
}

export default FormInput;
