import "./footer-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
          <div className='inner'>
            <div className="footer-content">
              <div className='left-content'>
                <p className="contact-us">Contact Us</p>
                  <div className='social-media-icons'>
                    <a href="mailto:info@eltequila.com?subject=Tequila%20Inquiry">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
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
              <p className="text-right" >
                © Los Alumbrados. All rights reserved. 2024
              </p>
            </div>
          </div>
        </footer>
    );
  };
  
  export default Footer;
  