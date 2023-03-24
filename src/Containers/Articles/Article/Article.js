import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const location = useLocation();
  const state = location.state;
  
  return (
    <>
      <h1>Ma page article ({id})</h1>
      {state && state.fromHome ? <p>Cliqué depuis accueil</p> : null}
    </>
  );
}

export default Article;
