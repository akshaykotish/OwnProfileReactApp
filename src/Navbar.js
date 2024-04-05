import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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


  const toggleMenu = () => {
    setIsOpen(!MenuIsOpen);
  };

  const navigate = useNavigate();

  const handleClick = (url) => {
      navigate(url); // Replace with your desired URL
      window.scrollTo(0, 0);
    };

  
    const openUrl = (url)=>{
      window.open(url);
    }

  return (
    <nav className='navbar'>
      <div className='Logo'>
        Profile Overseas
      </div>
      <div className='ToggleButton' onClick={toggleMenu}>
        {!MenuIsOpen ? <GiHamburgerMenu size={20} /> : <RxCross1 size={30} />}
      </div>
      <div id="NavmenuBox" onClick={toggleMenu} className={MenuIsOpen ? "Menu Show": "Menu Hide"} >
        <div className='ExitTouchArea' onClick={toggleMenu}>
          <label>Soft Touch to Hide</label>
        </div>
        <div className='MenuItem' onClick={()=>handleClick("/")}>
          <HiHome size={iconsize} />
          <label>Home</label>
        </div>
        <div className='MenuItem' onClick={()=>handleClick("/Products/Cycle Parts")}>
          <FaBicycle size={iconsize} />
          <label>Cycle Parts</label>
        </div>
        <div className='MenuItem' onClick={()=>handleClick("/Products/Tableware")}>
          <CiCoffeeCup size={iconsize} />
          <label>Tableware</label>
        </div>
        <div className='MenuItem' onClick={()=>{openUrl("tel:918427529709")}}>
          <IoIosContact size={iconsize} />
          <label>Contact</label>
        </div>
        <div className='MenuItem' onClick={()=>{openUrl("https://wa.me/918427529709?text=Hi, I want to buy your products.")}}>
          <FaWhatsapp size={iconsize} />
          <label>WhatsApp.</label>
        </div>
        <div className='MenuItem' onClick={()=>{openUrl("https://www.google.com/maps/dir//1996,+Street+Number+15,+Dasmesh+Nagar,+New+Kartar+Nagar,+Ludhiana,+Punjab+141003/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x391a82f8708e3187:0xbfbc16eb07de1680?sa=X&ved=1t:707&ictx=111")}}>
          <FaMapLocationDot size={iconsize} />
          <label>Location</label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
