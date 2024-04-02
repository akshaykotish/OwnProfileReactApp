import React from 'react';
import './Footer.css'; // Styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Own Profile</h3>
          <p>Own Profile is a leading cycle parts and disposable tableware manufacturing company specializing in crafting wheels, napkins, and glasses for individuals and businesses.</p>
          <p>© 2024 Own Profile. All rights reserved.</p>
        </div>
        <div className="footer-column">
          <h3>Company Details</h3>
          <p>Address: 1996/12, St. No. 15, Dashmesh Nagar, Gill Road, Ludhiana (Punjab)</p>
          <p>Email: ownprofile16@gmail.com</p>
          <p>Phone: +91 8427529709, +91 7814277668</p>
        </div>
        <div className="footer-column">
          <h3>Website Developer</h3>
          <p>Developed by <b>Akshay Lakshay Kotish Private Limited</b></p>
          <p>Email: akshaykotish@gmail.com</p>
          <p>Phone: +91 9896770369</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
