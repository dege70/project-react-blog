import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./NavigationItem.module.css";

function NavigationItem(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.to);
  };
  
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.to} aria-current="page" onClick={handleClick}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
