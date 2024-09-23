import { Routes, Route } from "react-router-dom";
import About from './components/about';
import AppNavbar from './components/navbar';
import ComingSoon from './components/comingSoon';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <AppNavbar /> */}
      <Routes>
        <Route path="/" element={< ComingSoon />} />
        {/* <Route path="/" element={< Home />} /> */}
        <Route path="/home" element={< ComingSoon />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
