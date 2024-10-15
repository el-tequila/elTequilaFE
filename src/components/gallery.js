import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./gallery.css";

const Gallery = () => {
  return (
    <Container className="coming-soon-container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} className="text-center">
        <h1 className="coming-soon-title">
            <span className="coming-text">Comin</span>g soon
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;