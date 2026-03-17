import {useContext} from "react";
import ThemeContext from "../../Context/ThemeContext.js";
import Navbar from "../Navbar";
import "./index.css";

function Projects(){
  const projectList = [
    {
      title: "User-Transaction",
      description: "My personal portfolio built with React.js and React Router, Hooks.",
      git: "https://github.com/raghurammallimoggala/user-transactio",
      deploy:"https://user-transaction-ochre.vercel.app/"

    },
    {
      title: "CMS Project",
      description: "A simple Content Management System with React frontend and Node.js backend.",
      git: "https://github.com/raghurammallimoggala/cms-project",
      deploy:"https://cms-project-rouge.vercel.app/"
    },
    {
      title: "E-commerce App",
      description: "Full stack e-commerce web app using React, Express, and MongoDB.",
      git: "https://github.com/raghu/ecommerce",
      deploy:"https://e-commerce-app-eight-cyan.vercel.app/"
    }
  ];

    const {isDarkTheme} = useContext(ThemeContext)
    const projectBg=isDarkTheme ? "dark" :"light"
    const bgcolor=isDarkTheme ? "card-light":"card-dark"
  return (
    <div className={`projects ${projectBg}`}>
      <Navbar/>
      <h2 className="project-title">My Projects</h2>
      <ul className="project-list">
        {projectList.map((proj, index) => (
          <li key={index} className={`project-card ${bgcolor}`}>
            <h3 className="project-list-title">{proj.title}</h3>
            <p className="project-description">{proj.description}</p>
            <a className="project-link" href={proj.git} target="_blank" rel="noreferrer">
              View code
            </a>
            <a className="project-link" href={proj.deploy} target="_blank" rel="noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Projects;