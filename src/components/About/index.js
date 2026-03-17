import {useContext} from "react"
import ThemeContext from "../../Context/ThemeContext.js"
import Navbar from "../Navbar"
import "./index.css"

function About(){
  const {isDarkTheme}=useContext(ThemeContext)
      const themeClass=isDarkTheme ? "dark" :"light"
      const textColor=isDarkTheme ? "dark_text" :"light_text"
      return (
      <div className={`about ${themeClass}`}>
        <Navbar/>
        <h2 className={`about-title ${textColor}`}>About Me</h2>
        <p className={`about-description ${textColor}`}>
          Hi, I am <strong className="about-name">Raghuram</strong>.  
        I am a passionate <strong className="about-role">Full Stack Developer</strong> with knowledge in 
        React.js, Node.js, and modern web technologies.  
        I enjoy building responsive and user-friendly applications.
      </p>

      <p className={`about-background ${textColor}`}>
        My background is in <strong className="background-experience">Pharmaceuticals</strong> with 7+ years 
        experience, but now I am transitioning into <strong className="background-role">IT Software Development</strong>.  
        I love solving problems and continuously learning new skills.
      </p>

      <p className={`about-hobbies ${textColor}`}>
        Outside of coding, I enjoy reading, exploring new tools, and 
        working on creative projects.
      </p>
    </div>
  );
}
export default About;