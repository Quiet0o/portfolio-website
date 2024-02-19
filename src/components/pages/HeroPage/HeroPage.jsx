import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import imgUrl from "./mikolaj.png";
const HeroPage = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Developer",
        "Designer",
        "Frontend dev",
        "Backend dev",
        "UI/UX designer",
      ],
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
            Junior Backend Developer with a passion for building robust web applications. Proficient in server-side programming languages and frameworks, database management, and API integration. Dedicated to writing clean, efficient code and eager to contribute to dynamic development teams. Seeking opportunities to further develop skills and make impactful contributions in the realm of backend development.
          </p>
        </div>
      </div>
      <a className="arrow" href="#about">
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="about-page" id="about">
        <div className="about-me-text">
          <h2>
            <span>0.1</span> I'm web developer <hr />
          </h2>
          <p>
            Hello! My name is Mikołaj and I enjoy creating things that live on
            the internet. My interest in web development started back in 2014
            when I decided to try C++ tutorial! Fast-forward to today, and I’ve had the privilege of working at
            e-commerce sites. My main focus these days is building
            accessible, inclusive products and digital experiences.
            Here are a few technologies I’ve
            been working with recently:
          </p>
          <div className="technologies">
            <ul className="technologies-gird">
              <li>HTML</li>
              <li>CSS</li>
              <li>PHP</li>
              <li>REACT</li>
              <li>Symfony</li>
              <li>Twig</li>
            </ul>
          </div>
        </div>
        <div className="about-me-img">
          <img src={imgUrl} alt="face" />
        </div>
      </div>
    </>
  );
};

export default HeroPage;
