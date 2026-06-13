import { useNavigate } from 'react-router-dom';
import c1 from './assets/Images/ce1.png'
import c2 from './assets/Images/ce2.png'
import c3 from './assets/Images/ce3.png'
import c4 from './assets/Images/ce4.png'
import c5 from './assets/Images/ce5.png'
import c6 from './assets/Images/ce6.png'
import c7 from './assets/Images/ce7.png'
import c8 from './assets/Images/ce8.png'
import c9 from './assets/Images/ce9.png'
import c10 from './assets/Images/ce10.jpeg'
import "./Certificate.css";

export default  function Certificate() {
    const route = useNavigate()
     const navFun = (type: any) => {
        if (type == 1) {
            route('/Intern')
        }
        else if (type == 2) {
            route('/Hobbies')
        }
      else if (type == 2) {
            route('/Home')
        }}
  return (
    <div className="certificate-container">
     
     <h1 className="certificate-heading">CERTIFICATIONS</h1>
      <div className="certificate-card">
        <p className="certificate-title">
          1.Sparkathon (Walmart Global Tech): Submitted a Smart Irrigation System using Arduino
and IoT sensors, showcasing innovation in sustainable automation
        </p>
        <img
          src={c1}
          alt="Certificate 1"
          className="certificate-image"
        />
      </div>

      <div className="certificate-card">
        <p className="certificate-title">
          2.CodHer’25 (ACM-CEG): Built a working Smart Irrigation prototype within 24 hours,
demonstrating rapid prototyping, teamwork, and problem-solving.
        </p>
        <img
          src={c2}
          alt="Certificate 2"
          className="certificate-image"
        />
      </div>
      <div className="certificate-card">
        <p className="certificate-title">
       3. Cryptography and Network Security Certification by NPTEL
        </p>
        <img
          src={c10}
          alt="Certificate 4"
          className="certificate-image"
        />
        </div>

      <div className="certificate-card">
        <p className="certificate-title">
        4.Presented a paper on Smart Irrigation System at RACES'26, showcasing an innovative Arduino-based solution for efficient water management in agriculture. The presentation highlighted the system's ability to optimize water usage through automated soil moisture monitoring and irrigation control.
        </p>
        <img
          src={c3}
          alt="Certificate 3"
          className="certificate-image"
        />
      </div>
      <div className="certificate-card">
        <p className="certificate-title">
          5.SAWIT.AI Learnathon by GUVI
        </p>
        <img
          src={c4}
          alt="Certificate 4"
          className="certificate-image"
        />
        </div>
      <div className="certificate-card">
        <p className="certificate-title">
          6.Java essential and java for beginners in Infosys springboard
        </p>
        <img
          src={c5}
          alt="Certificate 5"
          className="certificate-image"
        />
        <img
          src={c6}
          alt="Certificate 6"
          className="certificate-image"
        />
      </div>
      
        <div className="certificate-card">
        <p className="certificate-title">
         7.TCS ION Carrer Edge-Young Professional
        </p>
        <img
          src={c7}
          alt="Certificate 4"
          className="certificate-image"
        />
        </div>
        <div className="certificate-card">
        <p className="certificate-title">
        8. AI for Beginners in HP life
        </p>
        <img
          src={c8}
          alt="Certificate 4"
          className="certificate-image"
        />
        </div>
        <div className="certificate-card">
        <p className="certificate-title">
       9. HTML Certificate from W3 Schools
        </p>
        <img
          src={c9}
          alt="Certificate 4"
          className="certificate-image"
        />
        </div>

        <div className="certificate-buttons">
          <button className="certificate-btn" onClick={()=>navFun(1)}>Prev</button>
          <button className="certificate-btn" onClick={()=>navFun(3)}>Home</button>
          <button className="certificate-btn" onClick={()=>navFun(2)}>Next</button>
        </div>
    </div>
  );
}

