import React from "react";

const Form = ({ title, type, msg, placeholder, value, onChange }) => {
  return (
    <div>
      <span>{title}: </span>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      <span> {msg}</span>
    </div>
  );
};

export default Form;
