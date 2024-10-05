import "./home-style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import invitation from '../assets/invitation.svg'

const Home = () => {
    return (
        <div>
            <Container className="home-container">
                <div className='text-container'>
                    <p>Celebrating Tradition</p>
                    <p><span className='underline'>Craftin</span><span className='bold'>g Unforgettable Moments</span></p>
                </div>
            </Container>
            <Container className='middle'>
                    <Row className="bottom-text"> 
                        <Col md={6} className="col-one" style={{ paddingRight: '80px' }}> 
                            <p className="we-are">We are </p>
                            <p><span className="underline-color">Lo</span><span className="alumbrados">s Alumbrados</span></p>
                            <span className="custom-color custom-paragraph" >
                                We love our craft! For generations, this tradition has been at the heart of our family, and now, with open arms, we invite the world to join us and become a part of our family.
                            </span>
                        </Col>
                        <Col md={6} style={{ paddingLeft: '50px' }}>
                            <p className="custom-text">For over two centuries, the heart of Jalisco has pulsed with the rhythm of agave harvests, carrying the timeless echoes of tradition. A family’s legacy, rooted in passion and dedication, has been passed down through generations, creating a tequila that embodies the spirit of the land and the warmth of their heritage. Today, with pride in their hearts, they invite the world to share in their treasured creation.</p>
                            <p className="custom-text">This is more than just tequila; it’s an invitation to celebrate life itself. It’s the sound of laughter around the table, a toast to the bonds of family and community, and a reminder of the moments that matter most. Each sip is a journey—an expression of authenticity and sustainability, a promise born from the agave fields. A legacy of love flows through every bottle, sparking joy and forging connections wherever it is shared.</p>
                        </Col>
                    </Row>   
            </Container>
            <Container>
                <p className="vision"> Our Vision</p>
                <p className="vision-text">To craft the world’s most cherished tequila, embodying Mexico’s heart and soul while inspiring future generations and creating unforgettable memories.</p>
                <img src={invitation} alt="" className="invitation" />
            </Container>
            <Container>
                <p> Have questions or want to learn more? We're here to help—let's connect!</p>
            </Container>
        </div>
  );
};

export default Home;
