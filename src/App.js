import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Home from "./Containers/Home/Home";
import Contact from "./Components/Contact/Contact";
import Articles from "./Containers/Articles/Articles";
import Article from "./Containers/Articles/Article/Article";
import { routes } from "./config/routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.contact + "/*"} element={<Contact />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
