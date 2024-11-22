import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Create by Muhammad Satrioadi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Develop by Tio.id {year} </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          
            
            
            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
