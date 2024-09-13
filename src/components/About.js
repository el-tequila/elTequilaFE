import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'; 

const About = () => {
    return(
        <Container className="About">
            <img src="images/tequilaMaking.jpeg" className="tequilaMaking"/>
            <div>
                <h1 style={{fontWeight: "bolder"}}> About Us</h1>
                <p style={{fontSize: "25px"}}>Tequila, the spirit of Mexico, is a timeless and iconic liquor made from the blue agave plant, primarily grown in the Jalisco region. The production of tequila is a labor-intensive process that begins with the harvesting of mature agave plants, which are carefully selected and cut by skilled jimadores. The agave hearts, or piñas, are then cooked in autoclaves or traditional ovens to convert the starches into fermentable sugars.
After cooking, the piñas are crushed and mixed with water to create a sweet, fermented liquid called mosto. This mixture is then distilled twice in copper or stainless steel stills to produce a clear, strong spirit. The tequila is then aged in oak barrels, which impart a rich, complex flavor and character. Finally, the tequila is bottled and labeled, ready to be enjoyed around the world. With its rich history, cultural significance, and smooth, crisp taste, tequila remains a beloved and authentic symbol of Mexican tradition and hospitality.</p>
            </div>
        </Container>
    )
}
export default About; 