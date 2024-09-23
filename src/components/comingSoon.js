import "./cs-style.css";
import Container from 'react-bootstrap/container';
import logo from '../assets/formula1_logo.svg';

const ComingSoon = () => {
    return (
        <Container className="ComingSoon">
          <img src={logo} alt="brand logo" className="brandLogoMain" />
            <div className="image-container">
              <p className="main-text">For over two centuries, the heart of Jalisco has pulsed to the rhythm of agave harvests, carrying the timeless echoes of tradition. Passed down through generations, a family’s passion and dedication has crafted a tequila that embodies the spirit of their land and the warmth of their heritage. Now, with hearts brimming with pride, we are excited to share this legacy with the world.

<br></br><br></br>On October 1, 2024, we invite you to join us in celebrating life, honoring the bonds of family and community, and savoring the authenticity of our craft. Each sip will take you on a journey—a tribute to sustainability and love, poured into every bottle from the agave fields of Jalisco. This is more than just tequila; it’s a celebration of tradition, connection, and joy that’s meant to be shared.

<br></br><br></br>Stay tuned and be part of the story when our treasure is unveiled this October.</p>
<p className='signature'>Signature</p>
    </div>
    </Container>
  );
};

export default ComingSoon;
