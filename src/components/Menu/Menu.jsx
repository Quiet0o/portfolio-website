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
      <div className="menu-logo">
        <a href="https://agency.fenze.dev">
          <svg
            viewBox="0 0 95 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.173309 73V0.272728H46.7642V11.3168H13.348V31.0611H26L35.5 42.1051H13.348V73H0.173309Z"
              fill="white"
            />
            <path
              d="M48 72.3V0.300003H95V11.2336V72.3H81.7942V41.7668V11.2336H61.2904V30.7805H71L80.7854 41.7141H61.2904V72.3H48Z"
              fill="white"
            />
          </svg>
        </a>
      </div>

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
            <a href="">
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