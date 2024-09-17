import "./footer-style.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
      <div className="footer">
        <footer>
          <Container className='inner'>
            <h1 className="text-center" >
            Contact Us!
              </h1>
              <br></br>
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
          </Container>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  