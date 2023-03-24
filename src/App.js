// Librairies
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config/routes";

// Composants
import Layout from "./hoc/Layout/Layout";
import Home from "./Containers/Home/Home";
import Contact from "./Components/Contact/Contact";
import Articles from "./Containers/Articles/Articles";
import Article from "./Containers/Articles/Article/Article";

import Ajouter from "./Containers/Admin/Ajouter/Ajouter";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.contact + "/*"} element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path={routes.ajouter} element={<Ajouter />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
