import "./footer-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
          <div className='inner'>
            <p className="text-left" >
            © Los Alumbrados. All rights reserved. 2024
              </p>
              <div className='social-media-icons'>
                <a href="https://www.facebook.com/profile.php?id=61565716603349">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/el.tequilaoficial">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://x.com/_eltequila_">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
          </div>
        </footer>
    );
  };
  
  export default Footer;
  