import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Navbar, navbar } from './Components/Navbar';

import { About } from './Pages/AboutMe/About';
import { Projects } from './Pages/Projects/Projects';
import { Home } from './Pages/Home/Home';
import {Footer} from './Components/Footer'
import './Components/Footer.css'
import { Work } from './Pages/WorkExp/Work';
import { Certifications } from './Pages/Certifications/Certifications';
import { Awards } from './Pages/Awards/Awards';
import { Experience } from './Pages/Experience/Experience';
function App() {
 
  return (
    <div className="App">
      <div className = "font-link">
      
     <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}>Welcome to my Website</Route>
        <Route path = "/About" element = {<About/>}></Route>
        <Route path = "/Projects" element = {<Projects/>}></Route>
        <Route path = "/Work" element = {<Work/>}></Route>
        <Route path = "/Certifications" element = {<Certifications/>}></Route>
        <Route path = "/Awards" element = {<Awards/>}></Route>
        <Route path = "/Experience" element = {<Experience/>}></Route>
      </Routes>
     </Router>
     <Footer/>
    </div>
    </div>
    
  );
}

export default App;
