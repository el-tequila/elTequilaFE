import "./footer-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
          <div className='inner'>
            <div className="footer-content">
              <p className="text-left" >
                © Los Alumbrados. All rights reserved. 2024
              </p>
              <a href="mailto:info@eltequila.com?subject=Tequila%20Inquiry" className="contact-us">Contact Us</a>
              <div className='social-media-icons'>
                <a href="https://www.facebook.com/profile.php?id=61565716603349">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/el.tequilaoficial">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://x.com/_eltequila_">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>
          </div>
        </footer>
    );
  };
  
  export default Footer;
  