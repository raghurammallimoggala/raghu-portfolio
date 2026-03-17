import {useContext} from "react";
import ThemeContext from "../../Context/ThemeContext.js";
import Navbar from "../Navbar";
import Certificate from "../Certificate";
import "./index.css"

function Skills(){  
    const skills = [
    { id:1,name: "HTML", imageUrl: "/skills/html.png" },
    { id:2,name: "CSS", imageUrl: "/skills/css.png" },
    { id:3,name: "Bootstrap", imageUrl: "/skills/bootstrap.png" },
    { id:4,name: "SQL Database", imageUrl: "/skills/sql-database.png" },
    { id:5,name: "JavaScript", imageUrl: "/skills/javascript.png" },
    { id:6,name: "Python", imageUrl: "/skills/python.png" },
    { id:7,name: "Git,Command Line", imageUrl: "/skills/git-command-line.png"},
    { id:8,name: "Node.Js", imageUrl: "/skills/node-js.png" },
    { id:9,name: "React.Js", imageUrl: "/skills/react-js.png" },
    { id:10,name: "Flexbox", imageUrl: "/skills/flexbox.png" }
  ];
  
  const {isDarkTheme} = useContext(ThemeContext)
  const skillsBg=isDarkTheme ? "dark" : "light"
  const textColor=isDarkTheme ? "#fff":"#000"
  return (
    <div className={`skills ${skillsBg}`}>
      <Navbar/>
      <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <ul className="skills-list">
        {skills.map(skills=>(
            <li key={skills.id} className="skills-item">
              <img alt={skills.name} src={skills.imageUrl} className="skills-image"/>
              <p className="skills-name" style={{color:textColor}}>{skills.name}</p>
              </li>
        ))}
  </ul>
  </div>
  <div className="certificates-container">
    <Certificate/>
  </div>
</div>
);
}
export default Skills;