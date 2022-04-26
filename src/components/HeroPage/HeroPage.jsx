import React from "react";

const HeroPage = () => {
  return (
    <>
      <div className="hero-page" id="home">
        <div className="welcome-page">
          <span>Welcome my name is</span>

          <h1>Mikołaj Kłosowski</h1>
          <h2>
            <span>I'm web developer</span>
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
      <div className="about-page">
        <div className="about-me-text" id="about">
          <h2>
            <span>0.1</span> I'm web developer <hr />
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellat vitae sit. Animi, odit praesentium libero amet quae alias
            enim consequuntur officia sed atque ex soluta vitae maiores! Labore,


          </p>
        </div>
        <div className="about-me-img">
          <img src="https://agency.fenze.dev/images/mikolaj.png" alt="face" />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
