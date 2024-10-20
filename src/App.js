import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
   const [isAgeVerified, setIsAgeVerified] = useState(false);

   useEffect(() => {
     // Check if the user has already visited the root
     const isAgeVerified = localStorage.getItem('ageVerified');
     if (isAgeVerified === 'true') {
       setIsAgeVerified(true);
     }
    }, []);

    function PrivateRoute({children}) {
      return isAgeVerified ? children : <Navigate to="/" />;
    }
      
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeVerification />} />
        <Route path="/underage" element={<Underage />} /> 
        <Route path="/home" element={<><PrivateRoute><AppNavbar /><Home /><Footer /></PrivateRoute></>} />
        <Route path="/gallery" element={<><PrivateRoute><AppNavbar /><Gallery /><Footer /></PrivateRoute></>} />
        <Route path="/contact" element={<><PrivateRoute><AppNavbar /><Contact /><Footer /></PrivateRoute></>} />
      </Routes>
    </div>
  );
}

export default App;
