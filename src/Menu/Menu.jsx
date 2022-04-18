import React from "react";

const Menu = () => {
  return (
    <div className="main-menu">
      <svg viewBox="0 0 95 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.173309 73V0.272728H46.7642V11.3168H13.348V31.0611H26L35.5 42.1051H13.348V73H0.173309Z"
          fill="white"
        />
        <path
          d="M48 72.3V0.300003H95V11.2336V72.3H81.7942V41.7668V11.2336H61.2904V30.7805H71L80.7854 41.7141H61.2904V72.3H48Z"
          fill="white"
        />
      </svg>

      <div className="menu-list">

        <ol>
          <li>
            <a href="">
              <span>01.</span> Home
            </a>
          </li>
          <li>
            <a href="">
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
  );
};

export default Menu;
