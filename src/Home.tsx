import { useNavigate } from 'react-router-dom';
import img from './assets/Images/profile.jpeg'
import "./Home.css";
export default function Home() {
  const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Glimpise')
        }
        else if (type == 2) {
            route('/Education')
        }
      else if (type == 3) {
            route('/Skill')
        }
      else if (type == 4) {
            route('/Project')
        }
      else if (type == 5) {
            route('/Intern')
        }
      else if (type == 6) {
            route('/Certificate')
        }
      else if (type == 7) {
            route('/Hobbies')
        }
      else if (type == 8) {
            route('/Contact')
        }}
  return (
    <>
    <div className="home-container">
      {/* Left Column */}
      <div className="home-left">
        <div className="home-intro">
          <h1>Hi, Myself Keerthana S</h1>
          <h2><i>I am an ECE Undergraduate </i>(Final Year)</h2>
        </div>

        <div className="home-buttons">
          <button className="home-btn" onClick={()=>navFun(1)}>Glimpse Into Me</button>
          <button className="home-btn" onClick={()=>navFun(2)}>Educational Background</button>
          <button className="home-btn" onClick={()=>navFun(3)}>Skills</button>
          <button className="home-btn"onClick={()=>navFun(4)}>Projects</button>
          <button className="home-btn"onClick={()=>navFun(5)}>Internship</button>
          <button className="home-btn"onClick={()=>navFun(6)}>Certificates</button>
          <button className="home-btn"onClick={()=>navFun(7)}>Hobbies</button>
          <button className="home-btn" onClick={()=>navFun(8)}>Contact Details</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="home-right">
        <img
          src={img}
          alt="Profile"
          className="home-image"
        />
      </div>
    </div>
    </>
  )
}

