import React from "react";
import {useEffect, useState,useMemo} from 'react';


const Projects = () => {

  const [user, setUser] = useState('Quiet0o');
  const [data, setData] = useState([]);

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getUserData();
  }, []);


  return (
    <div className="project-page" id ="projects">
      <div className="project-text">
        <h2>
          <span>0.2</span> My recent projects<hr />
        </h2>

      </div>
      <div className="projects-conteiner">
        <div className="project">
          <img src="https://via.placeholder.com/200" alt="test" srcSet="" />
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/200" alt="test" srcSet="" />
        </div>
        <div className="project">
          <img src="https://via.placeholder.com/200" alt="test" srcSet="" />
        </div>

      </div>
    </div>
  );
};

export default Projects;
