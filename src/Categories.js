import React, { useState } from 'react';

const productsData = [
  { id: 1, name: 'Product 1', category: 'Category A' },
  { id: 2, name: 'Product 2', category: 'Category A' },
  { id: 3, name: 'Product 3', category: 'Category B' },
  { id: 4, name: 'Product 4', category: 'Category B' },
  { id: 5, name: 'Product 5', category: 'Category C' },
];

const ProductPage = () => {
  const [currentCategory, setCurrentCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const filteredProducts = currentCategory === 'All'
    ? productsData
    : productsData.filter(product => product.category === currentCategory);

  const categories = ['All', ...new Set(productsData.map(product => product.category))];

  return (
    <div>
      <div className="category-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={category === currentCategory ? 'active' : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <p>{product.name}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
