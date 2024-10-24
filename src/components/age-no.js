import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import logo from '../assets/formula1_logo.svg';
import "./age-verify.css";

const Underage = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
  };
  return (
        <div className='age-verify-container'>
            <Container className="age-verify">
            <img src={logo} alt="brand logo" className="brand-age" />
                <div className="image-container">
                <p className='age-text'>We're sorry, you must be of legal drinking age to view the contents of this site.</p>
                  <button className='age-btn' onClick={handleBack}>&lt; BACK</button>
                </div>
            </Container>
        </div>
  );
};

export default Underage;