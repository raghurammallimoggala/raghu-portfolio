import {useContext} from "react";
import ThemeContext from "../../Context/ThemeContext.js";
import Navbar from "../Navbar";
import "./index.css";

function Projects(){
  const projectList = [
    {
      title: "User-Transaction",
      description: "User-Transaction built with frontend use React+Vite, tailwind CSS,react-icons, React Router, Hooks and backend use Node.js Express.js,Sqlite,JWT,bcrypt.",
      git: "https://github.com/raghurammallimoggala/user-transaction",
      deploy:"https://user-transaction-ochre.vercel.app/"

    },
    {
      title: "CMS Project",
      description: "A simple Content Management System with frontend use React+Vite, Tailwind CSS, Fetch API  and backend use Node.js Express.js Multer(file upload),Sqlite.",
      git: "https://github.com/raghurammallimoggala/cms-project",
      deploy:"https://cms-project-rouge.vercel.app/"
    },
    {
      title: "E-commerce App",
      description: "Full stack e-commerce-app web app using React,Redux Toolkit,JavaScript(ES6+),Tailwind CSS HTML5 CSS3",
      git: "https://github.com/raghurammallimoggala/e-commerce-app",
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