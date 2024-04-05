// Product.js
import React from 'react';
import "./P.css";

const Product = ({ title, category, details, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-category">{category}</p>
        <p className="product-description">{details}</p>
      </div>
    </div>
  );
};

export default Product;
