import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import Menu from "../Menu/Menu";
import Projects from "../Projects/Projects";
import EmailForm from "../Contact/EmailForm";
import Work from "../Work/Work";

const MainPage = () => {
  return (
    <div className="App">
      <Menu />
      <HeroPage />
      <Work />
      <Projects />
      <EmailForm />
    </div>
  );
};

export default MainPage;
