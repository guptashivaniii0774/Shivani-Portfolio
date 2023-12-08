import React , {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackToTopButton from './components/backToTop';
import HomePage from './Pages/HomePage'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import Portfolio from './Pages/Portfolio'
import ContactMe from './Pages/ContactMe'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './Pages/Services';
import Education from './Pages/Education';




const App = () => {
  const [loading , setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none"
      setLoading(false);
    }, 2500);
  }
 
  return (
    <>
      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<><Navbar /> <HomePage /><AboutMe /> <Education /> <Skills /><Services/><Portfolio /><ContactMe /> <Footer/></>} />
            <Route path="/home" element={<><Navbar /><HomePage /> </>} />
            <Route path="/about" element={<><Navbar /><AboutMe /> </>} />
            <Route path="/education" element={<><Navbar /><Education /> </>} />
            <Route path="/skills" element={<><Navbar /><Skills /> </>} />
            <Route path="/service" element={<><Navbar /><Services /> </>} />
            <Route path="/portfolio" element={<><Navbar /><Portfolio /> </>} />
            <Route path="/contact" element={<><Navbar /><ContactMe /> </>} />
          </Routes>
          <BackToTopButton />
        </Router>
    
      )}
    </>
  );
};


export default App
