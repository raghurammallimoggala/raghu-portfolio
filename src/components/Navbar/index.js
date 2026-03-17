import {useState,useContext} from "react"
import ThemeContext from "../../Context/ThemeContext.js"
import {NavLink} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

function Navbar(){

    const {isDarkTheme, toggleTheme}=useContext(ThemeContext);
    const [menuOpen, setMenuOpen]=useState(false);
    const themeClass=isDarkTheme ? "bg-dark" : "bg-light"
    const textColor=isDarkTheme ? "light" : "dark"

    const navLinks=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Contact",path:"/contact"},
        {name:"Projects",path:"/projects"},
        {name:"Skills",path:"/skills"},
    ]
            return(
                <div className={`navbar ${themeClass}`}>
                    <h1 className={`navbar-title ${isDarkTheme ? "link-light" : "link-dark"}`}>RAGHURAM M</h1>
                    <button className="menu-open" type="button" onClick={()=>setMenuOpen(!menuOpen)}>
                          <GiHamburgerMenu size={25} color={isDarkTheme ? "#fff":"#000"}/>
                    </button>
                    <ul className={`navbar-items ${menuOpen ? "active":""}`}>
                        {navLinks.map((link)=>(
                            <li key={link.name} onClick={()=>setMenuOpen(false)}>
                                <NavLink className={({isActive})=> `nav-item ${isActive ? "active-link":""}`} to={link.path}>{link.name}</NavLink>
                            </li>
                        ))}
                   </ul>
                   <button className={`button ${textColor}`} onClick={toggleTheme}>
                    {isDarkTheme ? "Light" : "Dark"}
                </button>
         </div>
    )
}
export default Navbar;