import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import {GrMail} from "react-icons/gr";
function Contact() {
    return(
        <div className="homepage contact">
            <h1>Want to know more? Let's get in touch!</h1>
            <div className="contactContainer">
                <div>
                    <div className="contactElement">
                        <FaGithub/>
                        <a href={"https://github.com/BenoitDossoine"} target="_blank" rel="noopener noreferrer">Github profile</a>
                    </div>
                    <div className="contactElement">
                        <FaLinkedin/>
                        <a href={"https://www.linkedin.com/in/benoit-dossoine/"} target="_blank" rel="noopener noreferrer">Linkedin profile</a>
                    </div>
                </div>
                <div>
                    <div className="contactElement">
                        <GrMail/>
                        <a href="mailto:benoit@dossoine.be">benoit@dossoine.be</a>
                    </div>
                    <div className="contactElement">
                        <FaPhone/>
                        <a href="tel:+32488167417">0488167417</a>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Contact;