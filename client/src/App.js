// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar/Navbar.jsx"
import Contact from "./components/Contact";
import AboutSection from "./pages/AboutSection";
import Main from "./pages/Main";
import Preloader from "./components/Preloader";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route to="" element={<Preloader/>}/>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutSection/>} />
      </Routes>
    </>
  );
}

export default App;
