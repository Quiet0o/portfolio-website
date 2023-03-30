import React from "react";
import {useEffect, useState,useMemo} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <span>0.2</span> My projects <hr />
        </h2>

      </div>
      <div className="projects-conteiner">
        {data.map((rep)=>{

          return (
            <div className="project">
              <center><h3>{rep.name}</h3></center>
              <center><a href={rep.html_url}> </a></center>

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
