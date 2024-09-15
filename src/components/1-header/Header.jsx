import React, { useCallback, useEffect, useState } from 'react'
import "./header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

  useEffect(()=>{
    if(theme === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }
    
  },[theme])
  return (
    <header className="header" id="header">
      <button
        className="menu icon-menu"
        onClick={() => {
          setShowModal(true);
        }}
      ></button>
      <div />
      <nav>
        <ul>
          <li><a href="#about">About</a></li> 
          <li><a href="#projects">Projects</a></li>      
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button
        className="mode"
        onClick={() => {
          //send value to localStorage
          localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")

          //get value from localStorage
          setTheme(localStorage.getItem("currentMode"))
        }}
      >
        {theme === "dark" ? (<span className="icon-sun"></span>) : (<span className="icon-moon-o"></span>)}
        
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li/>

            <li><a href="#header">About Me</a><button className="icon-close" onClick={() => {setShowModal(false); }}/></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;