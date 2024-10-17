import "./home-style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Invitation from '../assets/invitation.svg';
import SlideOne from '../assets/slide-1.svg';
import SlideTwo from '../assets/slide-2.svg';
import SlideThree from '../assets/slide-3.svg';
import SlideFour from '../assets/slide-4.svg';
import SlideFive from '../assets/slide-5.svg';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 5); // 5 = number of slides
            }, 5000); // 5000 = carousel interval
            return () => clearInterval(interval);
        }, []);

        const handleNavClick = (index) => {
            setActiveIndex(index);
        };
        const handleSelect = (index) => {
            setActiveIndex(index);
        }
    return (
        <div>
            <div className="home-container">
                <div className='text-container'>
                    <p>Celebrating Tradition</p>
                    <p><span className='underline'>Craftin</span><span className='bold'>g Unforgettable Moments</span></p>
                </div>
            </div>
            <Container className='middle'>
                    <Row className="bottom-text"> 
                        <Col md={6} className="col-one" style={{ paddingRight: '120px' }}> 
                            <p className="we-are">We are </p>
                            <p><span className="underline-color">Lo</span><span className="alumbrados">s Alumbrados</span></p>
                            <span className="custom-color custom-paragraph" >
                                We love our craft! For generations, this tradition has been at the heart of our family, and now, with open arms, we invite the world to join us and become a part of our family.
                            </span>
                        </Col>
                        <Col className="col-two" md={6} style={{ paddingLeft: '50px', paddingTop: '60px', paddingRight: '60px' }}>
                            <p className="custom-text">For over two centuries, the heart of Jalisco has pulsed with the rhythm of agave harvests, carrying the timeless echoes of tradition. A family’s legacy, rooted in passion and dedication, has been passed down through generations, creating a tequila that embodies the spirit of the land and the warmth of their heritage. Today, with pride in their hearts, they invite the world to share in their treasured creation.</p>
                            <p className="custom-text">This is more than just tequila; it’s an invitation to celebrate life itself. It’s the sound of laughter around the table, a toast to the bonds of family and community, and a reminder of the moments that matter most. Each sip is a journey—an expression of authenticity and sustainability, a promise born from the agave fields. A legacy of love flows through every bottle, sparking joy and forging connections wherever it is shared.</p>
                        </Col>
                    </Row>   
            </Container>
            <Container>
                <p className="vision"> Our Vision</p>
                <p className="vision-text">To craft the world’s most cherished tequila, embodying Mexico’s heart and soul while inspiring future generations and creating unforgettable memories.</p>
                <img src={ Invitation } alt="" className="invitation" />
            </Container>
            <div className='mission-container'>
                <div className="our-mission">
                <span className="underline-color">Ou</span><span className="alumbrados">r Mission</span>
                </div>
            <div className="carousel-nav-container">
                <div className="carousel-nav">
                <div
                    className={`carousel-nav-item ${activeIndex === 0 ? 'active' : ''}`}
                    onClick={() => handleNavClick(0)}
                >
                    TRADITION
                </div>
                <div
                    className={`carousel-nav-item ${activeIndex === 1 ? 'active' : ''}`}
                    onClick={() => handleNavClick(1)}
                >
                    COMMUNITY
                </div>
                <div
                    className={`carousel-nav-item ${activeIndex === 2 ? 'active' : ''}`}
                    onClick={() => handleNavClick(2)}
                >
                    HERITAGE
                </div>
                <div
                    className={`carousel-nav-item ${activeIndex === 3 ? 'active' : ''}`}
                    onClick={() => handleNavClick(3)}
                >
                    FAMILY
                </div>
                <div
                    className={`carousel-nav-item ${activeIndex === 4 ? 'active' : ''}`}
                    onClick={() => handleNavClick(4)}
                >
                    MEMORIES
                </div>
            </div>
        </div>
        </div>
            <Carousel activeIndex={activeIndex} onSelect={ handleSelect }>
            <Carousel.Item>
                < div className="carousel-slide">
                    <div  className='carousel-text-wrapper'>
                        <p>We celebrate the rich heritage and craftsmanship of Mexican tequila production, partnering with skilled artisans to create exceptional spirits that embody centuries of expertise.</p>
                    </div>
                <img
                className="d-block w-75 mx-auto carousel-image"
                src={ SlideOne }
                alt="First slide"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            < div className="carousel-slide">
                    <div  className='carousel-text-wrapper'>
                        <p>We are dedicated to the well-being of the communities we work with, supporting fair trade practices, sustainable agriculture, and educational initiatives to build a brighter future for generations to come.</p>
                    </div>
                <img
                className="d-block w-75 mx-auto carousel-image"
                src={ SlideTwo }
                alt="Second slide"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            < div className="carousel-slide">
                    <div  className='carousel-text-wrapper'>
                        <p>As proud ambassadors of Mexican heritage, we infuse every bottle with the vibrant traditions, history, and flavors of our land, crafting experiences that transport and inspire.</p>
                    </div>
                <img
                className="d-block w-75 mx-auto carousel-image"
                src={ SlideThree }
                alt="Third slide"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            < div className="carousel-slide">
                    <div  className='carousel-text-wrapper'>
                        <p>We embrace a spirit of warmth, inclusivity, and togetherness, welcoming everyone into our extended family and creating lasting moments of joy and connection.</p>
                    </div>
                <img
                className="d-block w-75 mx-auto carousel-image"
                src={ SlideFour }
                alt="Fourth slide"
                />
                </div>
            </Carousel.Item>
            <Carousel.Item>
            < div className="carousel-slide">
                    <div  className='carousel-text-wrapper'>
                        <p>Tequila is more than just a drink; it’s a catalyst for unforgettable experiences. We create moments of laughter, love, and celebration, where memories are made and stories are shared.</p>
                    </div>
                <img
                className="d-block w-75 mx-auto carousel-image"
                src={ SlideFive }
                alt="Fifth slide"
                />
                </div>
            </Carousel.Item>
            <Carousel Indicators={false} />
        </Carousel>
            <Container className="connect">
                <p> Have questions or want to learn more? </p>
                <p> We're here to help—let's connect!</p>
            </Container>
            <div className="connect-container">
            <Link to={"/contact"} className="connect-button"> CONTACT LOS ALUMBRADOS</Link>
            </div>        
        </div>
  );
};

export default Home;
