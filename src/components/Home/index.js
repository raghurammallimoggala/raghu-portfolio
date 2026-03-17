import {useContext} from "react"
import ThemeContext from "../../Context/ThemeContext.js";
import Navbar from "../Navbar"
import "./index.css";

function Home(){
    const {isDarkTheme}=useContext(ThemeContext)
    const themeClass=isDarkTheme ?"dark":"light"
    
    return (
            <div className={`home-container ${themeClass}`}>
             <Navbar/>
             <div className="profile-container">
             <img className="profile-pic" src="profile.jpg" alt="profile"/> 
             <h1 className="title">Welcome to My Portfolio</h1>
             <p className="description">I am Full Stock Developer</p>
            </div>
            </div>
        );
}  
export default Home;
