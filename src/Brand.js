import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="brand">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
    </div>
  );
};

export default Brand;