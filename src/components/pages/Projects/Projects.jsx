import React from "react";
import {useEffect, useState,useMemo} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
  const desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis nibh vitae nunc suscipit dictum. Integer gravida ex at semper pellentesque. Nullam eu sodales tortor, sed viverra magna. In finibus quam non neque iaculis, quis ultrices nisi gravida. Quisque eget tellus ipsum. Nulla facilisi. Aliquam scelerisque magna est, eget ullamcorper est congue in."]
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
        {data.map((rep,dep)=>{

          return (
            <div className="project">

              <center>
                <h3>
                  <span>0.{dep+1}</span> {rep.name}
                </h3>
              </center>

              <p> language: {rep.language}</p>
              <p> desc: {desc[dep]}</p>
              <a href={rep.html_url}> Tutaj ma byc emoji githuba </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
