import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from '../assets/formula1_logo.svg';
import "./age-verify.css";

const AgeVerification = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    // Set a cookie or local storage to track user's age verification
    localStorage.setItem('ageVerified', true);
    navigate('/home');
  };

  const handleNo = () => {
    localStorage.setItem('ageVerified', false);
    navigate('/underage');
  };

  return (
        <div className='age-verify-container'>
            <Container className="age-verify">
            <img src={logo} alt="brand logo" className="brand-age" />
                <div className="image-container">
                <p className='age-text'>You must be of legal drinking age to visit this site.</p>
                    <button className='age-btn' onClick={handleYes}>I'M OF LEGAL AGE</button>
                    <button className='age-btn' onClick={handleNo}>I'M NOT OF LEGAL AGE</button>
                </div>
            </Container>
        </div>
  );
};

export default AgeVerification;