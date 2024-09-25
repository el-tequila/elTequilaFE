import "./home-style.css";
import Container from 'react-bootstrap/Container';

const Home = () => {
    return (
        <Container className="top-margin">
            <div className='margin-text'>
                <p>Celebrating Tradition</p>
                <br></br>
                <p className='underline'>Crafting</p>
                <p className='bold'>Unforgettable Moments</p>
            </div>
            
    </Container>
  );
};

export default Home;
