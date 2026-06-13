import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Glimpise from "./Glimpise"
import Education from "./Education"
import Skill from "./Skill"
import Project from "./Project"
import Intern from "./Intern"
import Contact from "./Contact"
import Hobbies from "./Hobbies"
import Certificate from "./Certificate"

export default function Portroutes() {
    return (
        <>
            <Routes>
     
                <Route path="/" element={<Home></Home>}/>
                 <Route path="Home" element={<Home></Home>}/>
                  <Route path="Glimpise" element={<Glimpise></Glimpise>}/>
                  <Route path="Education" element={<Education></Education>}/>
                  <Route path="Skill" element={<Skill></Skill>}/>
                  <Route path="Project" element={<Project></Project>}/>
                  <Route path="Intern" element={<Intern></Intern>}/>
                  <Route path="Certificate" element={<Certificate></Certificate>}/>
                  <Route path="Hobbies" element={<Hobbies></Hobbies>}/>
                  <Route path="Contact" element={<Contact></Contact>}/>
                    
            </Routes>
        </>
    )
}
