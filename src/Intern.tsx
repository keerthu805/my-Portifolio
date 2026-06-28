import { useNavigate } from "react-router-dom";
import "./Intern.css";
import tan from'./assets/Images/intern1.jpeg'

export default function Intern() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Project')
        }
        else if (type == 2) {
            route('/Certificate')
        }
      else if (type == 3) {
            route('/Home')
        }}
  return (
    <>
    <div className="intern-container">
      <div className="intern-card">
        <h1 className="intern-main-heading"><b>INTERNSHIP</b></h1>

        {/* Internship 1 */}
        <div className="intern-row">
          <div className="intern-content">
            <h1 className="intern-heading">StaxTech</h1>

            <p className="pagraph">
              <strong>Duration:</strong> 1 Month
            </p>

            <p className="pagraph1">
              <strong>Period:</strong> 05.06.2026 - 05.07.2026
            </p>

            <p className="pagraph2">
              Worked as a <strong>Front-End Developer Intern</strong> and
              gained practical experience in web development using Node.js and
              modern web technologies.
            </p>

            <p className="pagraph">
              During the internship, I developed two projects:
            </p>

            <ul className="intern-list">
              <li>E-Commerce Website</li>
              <li>Portfolio Website</li>
            </ul>

            <p className="pagraph2">
              This internship enhanced my skills in responsive web design,
              frontend development, project structuring, and user interface
              development.
            </p>
          </div>

          {/* <div className="intern-image-section">
            <img
              src="/images/staxtech.jpg"
              alt="StaxTech Internship"
              className="intern-image"
            />
          </div> */}
        </div>

       
        <div className="intern-row">
          <div className="intern-content">
            <h1 className="intern-heading">TANTRANSCO, Manali</h1>

            <p className="pagraph">
              <strong>Duration:</strong> 3 Weeks
            </p>

            <p className="pagraph1">
              <strong>Period:</strong> 17.11.2025 - 06.12.2025
            </p>

            <p className="pagraph2">
              Completed an in-plant training program at TANTRANSCO, Manali,
              where I gained exposure to power transmission and substation
              operations.
            </p>

            <p className="pagraph">Topics learned during the training include:</p>

            <ul className="intern-list">
              <li>GIS Substation</li>
              <li>Communication Equipments</li>
              <li>Relays</li>
              <li>Circuit Breakers</li>
              <li>SCADA System</li>
            </ul>

            <p className="pagraph2">
              The training provided valuable knowledge about electrical power
              systems, protection equipment, monitoring systems, and real-world
              industrial practices.
            </p>
          </div>

          <div className="intern-image-section">
            <img
              src={tan}
              alt="TANTRANSCO Internship"
              className="intern-image"
            />
          </div>
        </div>

        <div className="intern-buttons">
          <button className="intern-btn" onClick={()=>navFun(1)}>Prev</button>
           <button className="intern-btn" onClick={()=>navFun(3)}>Home</button>
          <button className="intern-btn" onClick={()=>navFun(2)}>Next</button>
        </div>
      </div>
    </div>
    </>
  )
}

 