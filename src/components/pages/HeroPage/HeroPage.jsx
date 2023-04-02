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
      strings: ["Developer", "Designer", "Content Creator", "UI/UX designer"],
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
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React. Here are a few technologies I’ve
            been working with recently:
          </p>
        </div>
        <div className="about-me-img">
          <img src={imgUrl} alt="face" />
        </div>
      </div>

    </>
  );
};

export default HeroPage;
