import React from "react";
import { useState } from "react";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    if (isActive == true) {
        document.body.style.overflow=""
    }
    else{
      document.body.style.overflow="hidden"

    }
  };

  return (
    <>
    <div className={isActive ? 'main-menu-mobile': "main-menu"}>
      <div className="menu-list">
        <div id="open-nav" onClick={toggleClass}>
          <div id="burger" className={isActive ? 'burger-close': null}></div>
        </div>
        <ol>
          <li>
            <a href="#home">
              <span>01.</span> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <span>02.</span> About
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>03.</span> Projects
            </a>
          </li>
          <li>
            <a href="">
              <span>04.</span> Contact
            </a>
          </li>
        </ol>
      </div>
    </div>
     <nav className={isActive ? 'nav-open': null}>

     <div id='box'>
       <div id='entries'>
       <ol>
           <li>
             <a href="#home" onClick={toggleClass}>
               <span>01.</span> Home
             </a>
           </li>
           <li>
             <a href="#about" onClick={toggleClass}>
               <span>02.</span> About
             </a>
           </li>
           <li>
             <a href="" onClick={toggleClass}>
               <span>03.</span> Projects
             </a>
           </li>
           <li>
             <a href="" onClick={toggleClass}>
               <span>04.</span> Contact
             </a>
           </li>
         </ol>
       </div>
     </div>
   </nav>
   </>
  );
};

export default Menu;