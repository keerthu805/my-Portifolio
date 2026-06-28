import { useNavigate } from "react-router-dom";
import "./Education.css";

export default  function Education() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Glimpise')
        }
        else if (type == 2) {
            route('/Skill')
        }
      else if (type == 3) {
            route('/Home')
        }}
  return (
    <>
    <div className="edu-container">
      <div className="edu-card">
        <h1 className="edu-heading"><b>EDUCATIONAL BACKGROUND</b></h1>

        <div className="edu-row">
          <h2>B.E. Electronics and Communication Engineering</h2>
          <p>
            Currently pursuing Bachelor of Engineering in Electronics and
            Communication Engineering at Velammal Engineering College.
          </p>
          <p><strong>Academic Year:</strong> 2023 - 2027</p>
          <p><strong>CGPA:</strong> 8.75</p>
        </div>

        <div className="edu-row">
          <h2>12th Standard</h2>
          <p>
            Completed 12th std at Velammal Vidhyashram,
            Surapet.
          </p>
          <p><strong>Academic Year:</strong> 2022 - 2023</p>
          <p><strong>Percentage:</strong> 83.5%</p>
        </div>

        <div className="edu-row">
          <h2>10th Standard</h2>
          <p>
            Completed 10th std at Velammal Vidhyashram, Surapet.
          </p>
          <p><strong>Academic Year:</strong> 2020 - 2021</p>
          <p><strong>Percentage:</strong> 80%</p>
        </div>

        <div className="edu-buttons">
          <button className="edu-btn" onClick={()=>navFun(1)}>Prev</button>
          <button className="edu-btn"onClick={()=>navFun(3)}>Home</button>
          <button className="edu-btn"onClick={()=>navFun(2)}>Next</button>
        </div>
      </div>
    </div>
    </>
  )
}

