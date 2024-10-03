import "./home-style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    return (
        <div>
            <Container className="home-container">
                <div className='text-container'>
                    <p>Celebrating Tradition</p>
                    <p><span className='underline'>Crafting</span> <span className='bold'>Unforgettable Moments</span></p>
                </div>
            </Container>
            <Container className='middle'>
                    <Row className="bottom-text"> 
                        <Col md={6}> 
                            <p>We are Los Alumbrados</p>
                            <p>We love our craft! For generations, this tradition has been at the heart of our family, and now, with open arms, we invite the world to join us and become a part of our family.</p>
                        </Col>
                        <Col md={6}>
                            <p>For over two centuries, the heart of Jalisco has pulsed with the rhythm of agave harvests, carrying the timeless echoes of tradition. A family’s legacy, rooted in passion and dedication, has been passed down through generations, creating a tequila that embodies the spirit of the land and the warmth of their heritage. Today, with pride in their hearts, they invite the world to share in their treasured creation.</p>
                            <p>This is more than just tequila; it’s an invitation to celebrate life itself. It’s the sound of laughter around the table, a toast to the bonds of family and community, and a reminder of the moments that matter most. Each sip is a journey—an expression of authenticity and sustainability, a promise born from the agave fields. A legacy of love flows through every bottle, sparking joy and forging connections wherever it is shared.</p>
                        </Col>
                    </Row>   
            </Container>
        </div>
  );
};

export default Home;
