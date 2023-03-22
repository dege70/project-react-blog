import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';

function Articles() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <h1>Articles</h1>
      {/* <Navigate to="/" /> */}
    </>
  );
}

export default Articles;
