// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Navbar.jsx"
import Contact from "./components/Contact";
import AboutSection from "./pages/AboutSection";
import Main from "./pages/Main";
import Home from "./components/Homepage/Home.jsx"
import Preloader from "./components/Preloader";
import {Routes, Route} from "react-router-dom";
import Project from "./components/ProjectMade/Project.jsx";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/project" element={<Project/>} />  */}
      </Routes>
  
    </>
  );
}

export default App;
