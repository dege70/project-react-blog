// Librairies
import React from "react";
import classes from './Input.module.css';

function Input(props) {
  let inputElement;

  switch (props.type) {
    case "input":
      inputElement = <input {...props.config} value={props.value} />;
      break;
    case "textarea":
      inputElement = <textarea value={props.value}></textarea>;
  }
  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
