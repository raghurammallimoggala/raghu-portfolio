import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ThemeContext from "./Context/ThemeContext.js"
import './App.css';

function App(){
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };
  return(
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme,}}>
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
      </div>
      </ThemeContext.Provider>
  )
}
export default App;
