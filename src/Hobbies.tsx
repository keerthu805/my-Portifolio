import { useNavigate } from 'react-router-dom';
import c1 from './assets/Images/c1.jpeg'
import c2 from './assets/Images/c2.png'
import c3 from './assets/Images/c3.png'
import "./Hobbies.css";

function Hobbies() {
    const route = useNavigate()
     const navFun = (type: any) => {
        if (type == 1) {
            route('/Certificate')
        }
        else if (type == 2) {
            route('/Contact')
        }
      else if (type == 3) {
            route('/Home')
        }}
  return (
    <>
    <div className="hobby-container">
      
      {/* First Row */}
      <div className="hobby-row">
        <h1 className="hobby-heading"><b>HOBBIES</b></h1>
         <h2>COOKING</h2>
        <p className="hobby-text">
          Cooking is one of my most cherished hobbies, as it combines creativity, precision, and problem-solving. It has taught me to think analytically, manage resources efficiently, and adapt quickly to unexpected situations. From selecting ingredients to balancing flavors and managing time effectively, every cooking experience enhances my decision-making abilities and attention to detail. This hobby has also helped me develop patience, discipline, and a continuous learning mindset, which are valuable qualities in both personal and professional environments.
        </p>
        <h2>Memorable Achievement in Cooking</h2>
        <p className="hobby-text">
            My passion for cooking motivated me to participate in a cooking competition organized by our college. Working as part of a three-member team, we collaboratively planned, prepared, and presented our dish within the stipulated time. The event provided an excellent opportunity to demonstrate teamwork, coordination, and creativity while performing under pressure. Through effective collaboration and dedication, our team secured Second Place in the competition. This achievement remains one of the most rewarding experiences of my college journey, reinforcing the importance of teamwork, perseverance, and excellence in achieving a common goal.
        </p>
        {/* Images Down by Down */}
        <img
          src={c1}
          alt="Cooking 1"
          className="hobby-image"
        />

        <img
          src={c2}
          alt="Cooking 2"
          className="hobby-image"
        />

        <img
          src={c3}
          alt="Cooking 3"
          className="hobby-image"
        />
      </div>

      {/* Second Row */}
      <div className="hobby-row">
        <h2 >CYCLING</h2>

        <p className="hobby-text">
          Cycling is one of my favorite hobbies, as it promotes physical fitness, mental well-being, and self-discipline. It has helped me develop endurance, perseverance, and a goal-oriented mindset while encouraging a healthy and active lifestyle. Through regular cycling, I have learned the importance of consistency, time management, and maintaining focus, qualities that positively influence both my personal and professional growth.

        </p>
      </div>
      <div className="hobby-buttons">
          <button className="hobby-btn" onClick={()=>navFun(1)}>Prev</button>
           <button className="hobby-btn" onClick={()=>navFun(3)}>Home</button>
          <button className="hobby-btn" onClick={()=>navFun(2)}>Next</button>
        </div>

    </div>
    </>
  )
}

export default Hobbies;