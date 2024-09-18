import "./footer-style.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
          <div className='inner'>
            <p className="text-left" >
            © El Tequila All rights reserved. 2024
              </p>
              <div className='social-media-icons'>
                <a href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
          </div>
        </footer>
    );
  };
  
  export default Footer;
  