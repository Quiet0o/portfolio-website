import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import imgUrl from "../../../../public/images/mikolaj.png"
const HeroPage = () => {
  const textRef = useRef();


  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator","UI/UX designer"],
    });
  }, []);
  return (
    <>
      <div className="hero-page" id="home">
        <div className="welcome-page">
          <span>Welcome my name is</span>

          <h1>Mikołaj Kłosowski</h1>
          <h2>
           <span>I'm</span> <span ref={textRef}></span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in
            placeat enim alias illo consectetur, deserunt est debitis fugit?
            Ipsum dolorum non quis doloribus aspernatur optio id blanditiis,
            maxime eos!
          </p>
        </div>
      </div>
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="about-page" id="about">
        <div className="about-me-text">
          <h2>
            <span>0.1</span> I'm web developer <hr />
          </h2>
          <p>
            test
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellat vitae sit. Animi, odit praesentium libero amet quae alias
            enim consequuntur officia sed atque ex soluta vitae maiores! Labore,


          </p>
        </div>
        <div className="about-me-img">
          <img src="src\components\images\mikolaj.png" alt="face" />
        </div>
      </div>
    </>
  );
};

export default HeroPage;