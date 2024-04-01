import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiHome } from "react-icons/hi";
import { FaBicycle } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.css"

const Navbar = () => {
  const [MenuIsOpen, setIsOpen] = useState(false);
  const [dragPosY, changedragPosY] = useState(0.0);
  const [Wwidth, setWidth] = useState(window.innerWidth);
  const [iconsize, changeiconsize] = useState(Wwidth < 600 ? 50: 25);

  
  if(Wwidth != window.innerWidth)
  {
    setWidth(Wwidth);
  }

  console.log(Wwidth + "  " + iconsize);

  const toggleMenu = () => {
    setIsOpen(!MenuIsOpen);
  };

  return (
    <nav className='navbar'>
      <div className='Logo'>
        Own Profile
      </div>
      <div className='ToggleButton' onClick={toggleMenu}>
        {!MenuIsOpen ? <GiHamburgerMenu size={20} /> : <RxCross1 size={30} />}
      </div>
      <div id="NavmenuBox" onClick={toggleMenu} className={MenuIsOpen ? "Menu Show": "Menu Hide"} >
        <div className='ExitTouchArea' onClick={toggleMenu}>
          <label>Soft Touch to Hide</label>
        </div>
        <div className='MenuItem'>
          <HiHome size={iconsize} />
          <label>Home</label>
        </div>
        <div className='MenuItem'>
          <FaBicycle size={iconsize} />
          <label>Cycle Parts</label>
        </div>
        <div className='MenuItem'>
          <CiCoffeeCup size={iconsize} />
          <label>Tableware</label>
        </div>
        <div className='MenuItem'>
          <IoIosContact size={iconsize} />
          <label>Contact</label>
        </div>
        <div className='MenuItem'>
          <FaWhatsapp size={iconsize} />
          <label>WhatsApp.</label>
        </div>
        <div className='MenuItem'>
          <FaMapLocationDot size={iconsize} />
          <label>Location</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
