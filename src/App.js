// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </>
  );
}

export default App;
