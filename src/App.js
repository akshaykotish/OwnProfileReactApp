import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Products from './Products';
import ProductPage from  './ProductPage';
import Product from './Product';
import Categories from './Categories';
import Category from './Category';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  
  return (
    <Router>
      <div className="App">
      <header className="header">
        <Navbar/>
      </header>
      <main className="page-content">
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/products' component={Products} /> */}
          <Route path='/products/:section' element={<ProductPage/>} />
          {/* <Route path='/products/:id' component={Product} /> */}
          <Route path='/categories' component={Categories} />
          <Route path='/categories/:id' component={Category} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
      
    </Router>
  );
}

export default App;
