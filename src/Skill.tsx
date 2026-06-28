import { useNavigate } from "react-router-dom";
import "./Skill.css";

export default function Skill() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Education')
        }
        else if (type == 2) {
            route('/Project')
        }
      else if (type == 3) {
            route('Home')
        }}
  const skills = [
    "Node.js",
    "HTML",
    "SQL",
    "CSS",
    "Bootstrap",
    "Python (Basic)",
    "Java",
    "Arduino",
  ];

  return (
    <>
    <div className="skill-container">
      <div className="skill-card">
        <h1 className="skill-heading"><b>SKILLS</b></h1>

        <div className="skill-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-box">
              {skill}
            </div>
          ))}
        </div>

        <div className="skill-buttons">
          <button className="skill-btn" onClick={()=>navFun(1)}>Prev</button>
          <button className="skill-btn" onClick={()=>navFun(3)}>Home</button>
          <button className="skill-btn" onClick={()=>navFun(2)}>Next</button>
        </div>
      </div>
    </div>
    </>
  )
}

