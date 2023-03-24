// Librairie
import React, { useState } from "react";

// Composant
import Input from "../../../Components/UI/Input/Input";
import classes from "./Ajouter.module.css"

function Ajouter() {
  // State
  const [inputs, setInputs] = useState({
    titre: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Titre de l'Article",
      },
      value: "",
      label: "Titre",
    },
    contenu: {
      elementType: "textarea",
      elementConfig: {},
      value: "",
      label: "Contenu de l'article",
    },
    auteur: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Auteur de l'article",
      },
      value: "",
      label: "Auteur",
    },
  });

  // Comportement
  const formElementsArray = [];
  for(let key in inputs) {
    formElementsArray.push({
        id: key,
        config: inputs[key]
    })
  }

  let form = (
    <form className={classes.Ajouter}>
        {formElementsArray.map(formElement => (
            <Input
                key={formElement.id} 
                value={formElement.config.value}
                label={formElement.config.label}
                type={formElement.config.elementType}
                config={formElement.config.elementConfig}
            />
        ))}
    </form>
  )

  // Affichage
  return (
    <div className="container">
        <h1>Ajouter</h1>
        {form}
    </div>
  );
}

export default Ajouter;
