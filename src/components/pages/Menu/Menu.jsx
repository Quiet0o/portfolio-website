import React from "react";
import { useState } from "react";

const Menu = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
    if (isActive == true) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const Menu = [
    "about",
    "work",
    "projects",
    "contact",
  ];

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <>
      <div className={isActive ? "main-menu-mobile" : "main-menu"}>
        <div className="menu-list">
          <div id="open-nav" onClick={toggleClass}>
            <div id="burger" className={isActive ? "burger-close" : null}></div>
          </div>
          <ol>
            {Menu.map((name, position) => {
              return (
                <>
                  <li>
                    <a href={"#" + name}>
                      <span>0{position + 1}.</span> {Capitalize(name)}
                    </a>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </div>
      <nav className={isActive ? "nav-open" : null}>
        <div id="box">
          <div id="entries">
            <ol>
              {Menu.map((name, position) => {
                return (
                  <>
                    <li>
                      <a href={"#" + name} onClick={toggleClass}>
                        <span>0{position + 1}.</span> {Capitalize(name)}
                      </a>
                    </li>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
