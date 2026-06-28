import { useNavigate } from "react-router-dom";
import "./Glimpise.css";

export default function Glimpise() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Home')
        }
        else if (type == 2) {
            route('/Education')
        }}
  return (
    <>
    <div className="glimpse-container">
      <div className="glimpse-card">
        <h1 className="glimpse-heading"><b>GLIMPSE INTO ME</b></h1>
  
        
        

        <p className="glimpse-paragraph">
          Hello! I'm Keerthana S, a Final Year Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (ECE) student at Velammal Engineering College.

I completed my schooling at Velammal Vidhyashram, where I developed a strong academic foundation and a keen interest in technology and innovation. Throughout my academic journey, I have been driven by curiosity, continuous learning, and the desire to create practical solutions to real-world problems.
        </p>

        <p className="glimpse-paragraph">
          I am particularly passionate about Node.js and modern web development technologies. As a quick learner, I enjoy exploring new concepts, adapting to emerging technologies, and applying my knowledge to build impactful projects. My enthusiasm for learning enables me to take on challenges confidently and continuously improve my technical skills.

My project experience includes developing a Smart Irrigation System and an Earthquake Detector using Arduino, which enhanced my understanding of embedded systems, sensors, and hardware-software integration. Additionally, I designed and developed an Event Management Web Application using Node.js, strengthening my skills in backend development, database management, and full-stack application design.
        </p>

        <p className="glimpse-paragraph">
          My project experience includes developing a Smart Irrigation System
          and an Earthquake Detector using Arduino, as well as creating an
          Event Management Web Application using Node.js. These projects have
          strengthened my problem-solving, teamwork, and development skills.
        </p>
       <p className="glimpse-paragraph">
        Beyond academics and technology, I enjoy cooking as a hobby. Cooking has taught me valuable life skills such as creativity, patience, time management, and problem-solving. Experimenting with different recipes and techniques has helped me develop a structured approach to overcoming challenges, a quality that also reflects in my technical and professional pursuits.

With a strong foundation in engineering, a passion for technology, and a commitment to continuous growth, I aspire to contribute meaningfully to innovative projects and build a successful career in the technology industry.</p>

        <div className="glimpse-buttons">
          <button className="glimpse-btn" onClick={()=>navFun(1)}>Home</button>
          <button className="glimpse-btn" onClick={()=>navFun(2)}>Next</button>
        </div>
      </div>
    </div>
    </>
  )
}

