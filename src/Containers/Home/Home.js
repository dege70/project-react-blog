import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
  <>
  <h1>Accueil</h1>
  <Link to="/articles/:id">Voir mon article</Link>
  </>
  );
}

export default Home;
