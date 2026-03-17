import {useContext, useState,useRef} from "react"
import ThemeContext from "../../Context/ThemeContext.js"
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar"
import "./index.css"

function Contact(){
  const[email, setEmail]=useState("");
  const[name, setName]=useState("");
  const [message, setMessage]=useState("");

  const form = useRef()
    const {isDarkTheme}=useContext(ThemeContext)
      const contactBg=isDarkTheme ? "dark" : "light"

      const sendEmail=(e)=>{
        e.preventDefault() 
        emailjs.sendForm(
          "service_cajqgyj",
          "template_98ld9zi",
          form.current,
          "i5xr1C0cI4Jtytrl-"

        )
        .then(
          (result)=>{
            alert("Message sent successfully");
            setEmail("");
            setName("");
            setMessage("");
          },
          (error)=>{
            alert("Failed to send message");
          }
        )
        e.target.reset()
      }
    return (
        <div className={`contact ${contactBg}`}>
          <Navbar/>
      <div className="contacts">
      <h2 className="contact-title">Contact Me</h2>
      <div className="details">
      <ul className="contact-list">
        <li className="contact-item">
          <strong className="contact-label">Email:</strong> <a href="mailto:raghu@example.com">raghurammallimoggala@gmail.com</a>
        </li>
        <li className="contact-item">
          <strong className="contact-label" >Phone:</strong> +91-7993956730
        </li>
        <li className="contact-item">
          <strong className="contact-label" >LinkedIn:</strong> <a href="https://linkedin.com/in/raghuram-mallimoggala" target="_blank" rel="noreferrer">linkedin.com/in/raghuram-mallimoggala</a>
        </li>
        <li className="contact-item">
          <strong className="contact-label">GitHub:</strong> <a href="https://github.com/raghurammallimoggala" target="_blank" rel="noreferrer">github.com/raghurammallimoggala</a>
        </li>
      </ul>
      <div className="send-details">
      <h3 className="contact-subtitle">Send me a Message</h3>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Your Name" name="name" required  className="contact-input" value={name} onChange={e=>setName(e.target.value)}/><br />
        <input type="email" placeholder="Your Email" name="email"required className="contact-input" value={email} onChange={e => setEmail(e.target.value)}/><br />
        <textarea placeholder="Your Message" name="message" required className="contact-textarea" value={message} onChange={e =>setMessage(e.target.value)}></textarea><br />
        <button type="submit" className="contact-button">Send</button>
      </form>
      </div>
      </div>
    </div>
    </div>
    )
}
export default Contact;