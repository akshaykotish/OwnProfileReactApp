import React, { useState } from 'react';
import "./Product.css";
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const productsData = [
  { id: 1, name: 'Carrier Pipe 1', image: '/Product/1.jpg', section: 'Cycle Parts', category: 'Carrier', details: "Size from 24 to 29.5" },
  { id: 2, name: 'Carrier Pipe 2', image: '/Product/2.jpg', section: 'Cycle Parts', category: 'Carrier', details: "Size from 24 to 29.5" },
  { id: 3, name: 'Carrier Pipe 3', image: '/Product/3.jpg', section: 'Cycle Parts', category: 'Carrier', details: "Size from 14 to 20" },
  { id: 4, name: 'Carrier Single Gadi ', image: '/Product/4.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 5, name: 'Carrier Queen', image: '/Product/5.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 6, name: 'Carrier Swift', image: '/Product/6.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 7, name: 'Carrier Double Gadi', image: '/Product/7.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 8, name: 'Carrier Slr Max', image: '/Product/8.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 9, name: 'Carrier Cartoon Pipe', image: '/Product/9.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 10, name: 'Carrier Pipe Double Gadi', image: '/Product/10.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 11, name: 'Carrier Double Gadi', image: '/Product/11.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 12, name: 'Carrier SLR double body', image: '/Product/12.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 13, name: 'Carrier 4 Pati Four Strips', image: '/Product/13.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 14, name: 'Carrier 4 Pati', image: '/Product/14.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 15, name: 'Carrier 3 Pati', image: '/Product/15.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 16, name: 'Carrier 3 Pati', image: '/Product/16.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 17, name: 'Carrier 3 Pati', image: '/Product/17.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 18, name: 'Carrier 3 Pati', image: '/Product/18.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 19, name: 'Queen Carrier', image: '/Product/19.jpg', section: 'Cycle Parts', category: 'Carrier', details: "" },
  { id: 20, name: 'Side Wheel 1', image: '/Product/20.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 21, name: 'Side Wheel 2', image: '/Product/21.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 22, name: 'Side Wheel 3', image: '/Product/22.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 23, name: 'Side Wheel 4', image: '/Product/23.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 24, name: 'Side Wheel 5', image: '/Product/24.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 25, name: 'Side Wheel 6', image: '/Product/25.jpg', section: 'Cycle Parts', category: 'Side Wheel', details: "" },
  { id: 26, name: 'Side Spot Adjustable 1', image: '/Product/26.jpg', section: 'Cycle Parts', category: 'Side Spot', details: "" },
  { id: 27, name: 'Side Spot Adjustable 2', image: '/Product/27.jpg', section: 'Cycle Parts', category: 'Side Spot', details: "" },
  { id: 28, name: 'Side Spot Adjustable 3', image: '/Product/28.jpg', section: 'Cycle Parts', category: 'Side Spot', details: "" },
  { id: 29, name: 'Side Spot Rod 1', image: '/Product/29.jpg', section: 'Cycle Parts', category: 'Side Spot Rod', details: "" },
  { id: 30, name: 'Side Spot Rod 2', image: '/Product/30.jpg', section: 'Cycle Parts', category: 'Side Spot Rod', details: "" },
  { id: 31, name: 'Side Spot Rod 3', image: '/Product/31.jpg', section: 'Cycle Parts', category: 'Side Spot Rod', details: "" },
  { id: 32, name: 'Side Stand 1', image: '/Product/32.jpg', section: 'Cycle Parts', category: 'Side Stand', details: "" },
  { id: 33, name: 'Side Stand 2', image: '/Product/33.jpg', section: 'Cycle Parts', category: 'Side Stand', details: "" },
  { id: 34, name: 'Bycycle Rims 1', image: '/Product/31.jpg', section: 'Cycle Parts', category: 'Bycycle Rims', details: "" },
  { id: 35, name: 'Bycycle Rims 2', image: '/Product/32.jpg', section: 'Cycle Parts', category: 'Bycycle Rims', details: "" },
  { id: 36, name: 'Handle Grip', image: '/Product/36.jpg', section: 'Cycle Parts', category: 'Handle Grip', details: "" },
  { id: 37, name: 'Chain', image: '/Product/37.jpg', section: 'Cycle Parts', category: 'Chain', details: "" },
  { id: 38, name: 'Chain', image: '/Product/38.jpg', section: 'Cycle Parts', category: 'Chain', details: "" },
  { id: 39, name: 'Cotter Pin', image: '/Product/39.jpg', section: 'Cycle Parts', category: 'Cotter Pin', details: "" },
  { id: 40, name: 'Paper Bags 1', image: '/Product/40.jpg', section: 'Tableware', category: 'Paper Bag', details: "" },
  { id: 41, name: 'Paper Bags 2', image: '/Product/41.jpg', section: 'Tableware', category: 'Paper Bag', details: "" },
  { id: 42, name: 'Straw Plain', image: '/Product/42.jpg', section: 'Tableware', category: 'Straw', details: "Sizes are 6' to 10'" },
  { id: 43, name: 'Straw Colored', image: '/Product/43.jpg', section: 'Tableware', category: 'Straw', details: "Sizes are 6' to 10'" },
  { id: 44, name: 'Handle Grip', image: '/Product/44.jpg', section: 'Tableware', category: 'Handle Grip', details: "" },
  
  { id: 45, name: 'Round Shallow', image: '/Product/45.jpg', section: 'Tableware', category: 'Round Plates', details: "Sizes are 6 to 12 inch" },
  { id: 46, name: 'Round Deep', image: '/Product/46.jpg', section: 'Tableware', category: 'Round Plates', details: "Sizes are 6 to 12 inch" },
  { id: 47, name: 'Round Partition', image: '/Product/47.jpg', section: 'Tableware', category: 'Round Plates', details: "Sizes are 10 to 12 inch" },
  
  { id: 48, name: 'Regular Round Bowls', image: '/Product/48.jpg', section: 'Tableware', category: 'Round Bowl', details: "Sizes are 2.5 to 5 inch" },
  { id: 49, name: 'Round Deep Bowls', image: '/Product/49.jpg', section: 'Tableware', category: 'Round Bowl', details: "Sizes are 5 to 9 inch" },
  
  { id: 50, name: 'Square Plates', image: '/Product/50.jpg', section: 'Tableware', category: 'Square Plates', details: "Sizes are 3.5 to 10 inch" },
  
  { id: 51, name: 'Square Bowls', image: '/Product/51.jpg', section: 'Tableware', category: 'Square Bowls', details: "Sizes are 2 to 5 inch" },
  
  { id: 52, name: 'Rectangle Plates', image: '/Product/52.jpg', section: 'Tableware', category: 'Rectangle Plates', details: "Sizes are 1.9 to 9.3 inch" },
  
  { id: 53, name: 'Spoon, Fork, Knife, & Spark', image: '/Product/53.jpg', section: 'Tableware', category: 'Wooden Cutlery ', details: "Sizes are 100mm to 165 mm" },
  { id: 54, name: 'Fruit Forks', image: '/Product/54.jpg', section: 'Tableware', category: 'Wooden Cutlery ', details: "Sizes are 100mm to 165 mm" },
  { id: 55, name: 'Pinewoord Cone & Boat', image: '/Product/55.jpg', section: 'Tableware', category: 'Wooden Cutlery', details: "Sizes are 80mm to 180 mm" },
  { id: 56, name: 'Wooden Strirrers', image: '/Product/56.jpg', section: 'Tableware', category: 'Wooden Cutlery', details: "Sizes are 4.5' to 6'" },

  
  { id: 57, name: 'Bamboo Skewers', image: '/Product/57.jpg', section: 'Tableware', category: 'Bamboo Cutlery', details: "Sizes are 4.5' to 6'" },
  { id: 58, name: 'Knot Sticks', image: '/Product/58.jpg', section: 'Tableware', category: 'Bamboo Cutlery', details: "Sizes are 4.5' to 6'" },
  { id: 59, name: 'Chopsticks', image: '/Product/59.jpg', section: 'Tableware', category: 'Bamboo Cutlery', details: "Sizes are 4.5' to 6'" },
  { id: 60, name: 'Gun Sticks, Stirrers & Straw', image: '/Product/60.jpg', section: 'Tableware', category: 'Bamboo Cutlery', details: "Sizes are 4.5' to 6'" },
  
  { id: 61, name: 'Paper Long Cup', image: '/Product/61.jpg', section: 'Tableware', category: 'Paper Cup', details: "100 ML" },
  { id: 62, name: 'Paper Premium Glass', image: '/Product/62.jpg', section: 'Tableware', category: 'Paper Cup', details: "350 ML" },
  { id: 63, name: 'Paper Hot Cup', image: '/Product/62.jpg', section: 'Tableware', category: 'Paper Cup', details: "250 ML" },
  
  
];

const ProductPage = () => {
  const navigate = useNavigate();
  const { section } = useParams();
  const [currentCategory, setCurrentCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const filteredProducts = currentCategory === 'All'
    ? productsData.filter(product => product.section === section)
    : productsData.filter(product => product.category === currentCategory && product.section === section);

  

  const categories = ['All', ...new Set(productsData.map(product => {
    if(product.section === section && product.category != "")
    {
      return  product.category;
    }
  }))];


  const openProduct = (id)=>{
    navigate("../../Product/" + id);
  }

  
  const openUrl = (url)=>{
    window.open(url);
  }

  return (
    <div>
      <div className='ProductPhotoHighlightSection'>
        <img src={section == "Cycle Parts" ? '/SlideCP.png' : '/TW.png'} />
      </div>
      <h1>{section}</h1>
      <div className="category-buttons">
        <div className='CategoryHead'><h4>Choose your category</h4></div>
        <br/>
        {categories.map(category => category  === undefined ? "" : (
          <div
            key={category}
            className={category === currentCategory ? 'buttons active' : 'buttons'}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className='productshead'><h4>{currentCategory}</h4></div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <div className='image'>
                <img src={product.image} />
            </div>
            <p><b>{product.name}</b></p>
            <p>{product.category} {product.details === "" ? "" : " | " + product.details}</p>
            <div className='allshopbtns'>
              <div className='btn' onClick={()=>{openUrl("https://wa.me/918427529709?text=I am intrested in this product https://profileoverseas.in/product/" + product.id)}}>
              <FaWhatsapp size="30" />
              </div>
                |
              <div className='btn' onClick={()=>{openUrl("tel:918427529709")}}>
              <IoCall size="30" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
