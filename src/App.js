import { Routes, Route } from "react-router-dom";
import Contact from './components/contact';
import Underage from './components/age-no';
import Gallery from './components/gallery';
import Home from './components/home';
import AgeVerification from './components/age-verify';
import AppNavbar from './components/navbar';
// import ComingSoon from './components/comingSoon';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeVerification />} />
        <Route path="/underage" element={<Underage />} /> 
        <Route path="/home" element={<><AppNavbar /><Home /><Footer /></>} />
        <Route path="/gallery" element={<><AppNavbar /><Gallery /><Footer /></>} />
        <Route path="/contact" element={<><AppNavbar /><Contact /><Footer /></>} />
        {/* <Route path="/home" element={< ComingSoon />} /> */}
        {/* <Route path="/" element={< ComingSoon />} /> */}
      </Routes>
    </div>
  );
}

export default App;
