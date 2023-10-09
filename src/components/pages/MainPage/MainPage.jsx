import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import Menu from "../Menu/Menu";
import Projects from "../Projects/Projects";
import EmailForm from "../Contact/EmailForm";

const MainPage = () => {
  return (
    <div className="App">
      <Menu />
      <HeroPage />
      <Projects />
      <EmailForm />
    </div>
  );
};

export default MainPage;
