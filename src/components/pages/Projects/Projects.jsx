import React from "react";
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const desc = ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",]
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
        <ul className="project-grid">
        {data.map((rep,dep)=>{

          return (
            <li>
              <div className="project-inner">

              <center>
                <h3>
                  <span>0.{dep+1}</span> {rep.name}
                </h3>
              </center>

              <p id="project-desc"> {desc[dep]}</p>
              <a href={rep.html_url} id="project-icon"> <FontAwesomeIcon icon={faGithub} style={{color: "#fff",}} /></a>
              <p id="project-language"> {rep.language}</p>
              </div>
            </li>
          )
        })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
