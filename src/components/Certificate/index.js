import {useState} from "react";
import "./index.css";
function Certificate(){
    const [selectedCertificate, setSelectedCertificate]=useState(null);
    const certificates=[
    {
        id:1,
        name:" Static Website(HTML,CSS,Bootstrap)", 
        imageUrl:"/certificate_image/BXMFQVFFCJ_thumbnail.png",
    },
    {
        id:2,
        name:" Responsive Website (HTML,CSS,JavaScript)", 
        imageUrl:"/certificate_image/EIYVELKACR_thumbnail.png",
    },

    {   
        id:3,
        name:"Programming Language (Python)",
        imageUrl:"/certificate_image/FDUAWOCSMR_thumbnail.png",
    },


    {   id:4,
        name:"Dynamic Web Application (HTML, CSS, JAVASCRIPT)",
        imageUrl:"/certificate_image/ILTHNFDKZT_thumbnail.png",
    },

    {   id:5,
        name:"Database Management (SQL)",
        imageUrl:"/certificate_image/VPQFGFLSFS_thumbnail.png",
    },

    {   id:6,
        name:"JavaScript Essentials (JavaScript)",
        imageUrl:"/certificate_image/DLIRNKCATR_thumbnail.png"
    },

    {   id:7,
        name:"Responsive Web Design using Flexbox (Flexbox)",
        imageUrl:"/certificate_image/FSWREAEYPH_thumbnail.png"
    },
       
    {   id:8,
        name:"Developer Foundations (Git, Commandline)",
        imageUrl:"/certificate_image/WUMWYEZXNS_thumbnail.png",
    },

    {   id:9,
        name:"Backend Development (Node.js)",
        imageUrl:"/certificate_image/EOURBQBSRT_thumbnail.png",
    },

    {    
        id:10,
        name:"User Interfaces building (React.js)",
        imageUrl:"/certificate_image/FFJLZAJTGE_thumbnail.png"
    }
   
]

return(
    <div className="certificate-container">
         <h1 className="certificate-heading">My Certificates</h1>
         <ul className="certificate-grid">
            {certificates.map(cert=>(
             <li key={cert.id} className="certificate-card" onClick={()=>setSelectedCertificate(cert)}>
                <img src={cert.imageUrl} alt={cert.name} className="certificate-thumb"/>
                <p className="certificate-title">{cert.name}</p>
             </li>
            ))}

         </ul>
         {selectedCertificate &&
         (<div className="certificate-modal">
            <div className="certificate-modal-content">
                     <img src={selectedCertificate.imageUrl} alt={selectedCertificate.name} className="preview-image"/>
                     <p className="preview-title">{selectedCertificate.name}</p>
                     <button className="close-btn" onClick={() => setSelectedCertificate(null)}>Close</button>
         </div>
         </div>)}
    </div>
)
}
export default Certificate;