import { useNavigate } from "react-router-dom";
import "./Contact.css";
export default function Contact() {
     const route = useNavigate()
     const navFun = (type: any) => {
        if (type == 1) {
            route('/Hobbies')
        }
        else if (type == 2) {
            route('/Home')
        }}
  return (
    <>
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title"><b>CONTACT DETAILS</b></h1>

        <div className="contact-row">
          <strong>Phone Number:</strong> 9840449504
        </div>

        <div className="contact-row">
          <strong>Email ID:</strong> keerthu.s811@gmail.com
        </div>
        <div className="contact-row">
          <strong>GitHub ID:</strong> https://github.com/keerthu805
          </div>

        <div className="contact-row">
          <strong>LinkedIn ID:</strong> https://www.linkedin.com/in/keerthana-s-01b396306
        </div>
       
        <div className="contact-thankyou">
          <h1><b>Thank You!</b></h1>
          <p><i>Thank you for visiting my portfolio.</i></p>
        </div>

        <div className="contact-buttons">
          <button className="contact-btn" onClick={()=>navFun(1)}>Prev</button>
          <button className="contact-btn" onClick={()=>navFun(2)}>Home</button>
        </div>
      </div>
    </div>
    </>
  )
}

