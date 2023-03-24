import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import classes from "./Contact.module.css";
import { routes } from "../../config/routes";

function Contact() {

  const navigate = useNavigate();

  const emailClickedHandler = () => {
    navigate(routes.contact + "/email");
  };

  const callClickedHandler = () => {
    navigate(routes.contact + "/telephone");
  };

  return (
    <>
      <h1>Contact</h1>
      <p>Par quel moyen de contact souhaitez-vous échanger ?</p>
      <button onClick={emailClickedHandler} className={classes.button}>
        Email
      </button>
      <button onClick={callClickedHandler} className={classes.button}>
        Téléphone
      </button>

      <Routes>
        <Route
          path={"/email"}
          element={<p>Envoyez un email à contact@exemple.com</p>}
        />
        <Route
          path={"/telephone"}
          element={<p>Contactez-nous au 01 23 45 67 89</p>}
        />
      </Routes>
    </>
  );
}

export default Contact;
