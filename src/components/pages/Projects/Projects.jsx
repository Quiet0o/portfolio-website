import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const desc = [
    "Basic python web scraper app , integreted with firebase noSQL database.",
    "Portfolio website to showacase my journey in to web develepoment world",
    "Simple e-commerce project created for school project, integreted with firebase",
    "Basic application to plan what to do. Mainly created with Symfony framework",
  ];
  const user = "Quiet0o";
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
    <div className="project-page" >
      <div className="project-text" id="projects" >
        <h2>
          <span>0.2</span> My projects <hr />
        </h2>
      </div>
      <div className="projects-conteiner">
        <ul className="project-grid">
          {data.map((rep, dep) => {
            return (
              <li>
                <div className="project-inner">
                  <center>
                    <h3>
                      <span>0.{dep + 1}</span>
                      <a href={rep.html_url}>
                        {rep.name}
                      </a>
                    </h3>
                  </center>

                  <p id="project-desc"> {desc[dep]}</p>
                  <a href={rep.html_url} id="project-icon">
                    {" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={{ color: "#fff" }}
                    />
                  </a>
                  <p id="project-language"> {rep.language}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
