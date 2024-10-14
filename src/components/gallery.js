import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gallery = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Gallery</h1>
          {/* Sub-navigation bar will go here */}
          {/* <SubNav /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;