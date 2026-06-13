import earth from './assets/Video/earth.mp4'
import event from './assets/Video/event.mp4'
import { useNavigate } from "react-router-dom";
import "./Project.css";

export default  function Project() {
    const route = useNavigate()

    const navFun = (type: any) => {
        if (type == 1) {
            route('/Skill')
        }
        else if (type == 2) {
            route('/Intern')
        }
      else if (type == 3) {
            route('/Home')
        }}
  return (
    <div className="project-container">
      <div className="project-card">
        <h1 className="project-main-heading"><b>PROJECTS</b></h1>

        {/* Project 1 */}
        <div className="project-row">
          <h1 className="project-heading">Earthquake Detector</h1>

          <h2 className="project-subheading">Components Used</h2>
          <ul className="project-list">
            <li>Arduino Uno</li>
            <li>Accelerometer Sensor (ADXL350)</li>
            <li>Buzzer</li>
            <li>LED</li>
            <li>Jumper Wires</li>
            <li>Breadboard</li>
            <li>Power Supply</li>
          </ul>

          <p className="project-paragraph">
            The Earthquake Detector is an Arduino-based project developed to
            detect vibrations and tremors that may indicate an earthquake. It
            uses a vibration sensor connected to an Arduino Uno to continuously
            monitor movement in the surrounding environment. The system is
            designed to provide an early warning by detecting unusual vibrations
            and alerting users through visual and audio indicators.
          </p>

          <p className="project-paragraph">
            When the vibration sensor detects movement beyond a predefined
            threshold, it sends a signal to the Arduino. The Arduino processes
            this signal and immediately activates a buzzer and LED, notifying
            users of potential seismic activity. This project demonstrates the
            practical application of embedded systems, sensor interfacing, and
            real-time monitoring. It is cost-effective, easy to implement, and
            serves as an educational prototype for understanding earthquake
            detection and disaster alert systems.
          </p>

          <video
            className="project-video"
            controls
            width="100%"
          >
            <source src={earth} type="video/mp4" />
          </video>
        </div>

        {/* Project 2 */}
        <div className="project-row">
          <h1 className="project-heading">Smart Irrigation System</h1>

          <h2 className="project-subheading">Components Used</h2>
          <ul className="project-list">
            <li>Arduino Uno</li>
            <li>Soil Moisture Sensor</li>
            <li>Water Pump</li>
            <li>Relay Module</li>
            <li>Power Supply</li>
            <li>Jumper Wires</li>
            <li>Breadboard</li>
            <li>LED Indicator</li>
            <li>Water Tank</li>
          </ul>

          <p className="project-paragraph">
            The Smart Irrigation System is an Arduino-based project designed to
            automate the watering process in agricultural fields and gardens. It
            uses a soil moisture sensor to measure the moisture content present
            in the soil and continuously monitor the condition of plants. The
            system helps conserve water by supplying it only when required,
            reducing manual effort and improving irrigation efficiency.
          </p>

          <p className="project-paragraph">
            When the soil moisture level falls below a predefined threshold, the
            sensor sends data to the Arduino, which automatically activates a
            water pump to irrigate the plants. Once the soil reaches the
            required moisture level, the Arduino turns off the pump, preventing
            overwatering. This project demonstrates the integration of sensors,
            automation, and embedded systems to create a cost-effective and
            sustainable solution for modern agriculture while promoting
            efficient water management.
          </p>
        </div>

        {/* Project 3 */}
        <div className="project-row">
          <h1 className="project-heading">Event Management System</h1>

          <h2 className="project-subheading">Technologies Used</h2>
          <ul className="project-list">
            <li>Node.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
          </ul>

          <p className="project-paragraph">
            The Event Management System is a web application developed using
            Node.js to simplify the process of event participation and
            registration. The application provides a user-friendly interface
            where users can create a new account, log in securely, and access
            various event-related services. It includes essential pages such as
            Home Page, Sign In Page, Sign Up Page for New Users, and a
            Registration Page, ensuring a smooth and organized user experience.
          </p>

          <p className="project-paragraph">
            The system also features dedicated event pages for Talent Hunt, Arts
            Festival, Youth and Women Empowerment, and Startup Ideas. Users can
            view event details and register for their preferred programs through
            the platform. This project demonstrates the development of a dynamic
            web application using Node.js, HTML, CSS, Bootstrap, and
            JavaScript, showcasing skills in web development, user
            authentication, form handling, and responsive interface design.
          </p>

          <video
            className="project-video"
            controls
            width="100%"
          >
            <source src={event} type="video/mp4" />
          </video>
        </div>

        <div className="project-buttons">
          <button className="project-btn" onClick={()=>navFun(1)}>Prev</button>
          <button className="project-btn" onClick={()=>navFun(3)}>Home</button>
          <button className="project-btn" onClick={()=>navFun(2)}>Next</button>
        </div>
      </div>
    </div>
  );
}

