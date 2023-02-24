import React from 'react';
import './navbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import IndividualIntervalsExample from './Carousel';

const Hero = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={{ span: 10, offset: 1 }}>
                    <IndividualIntervalsExample />
                </Col>
            </Row>
        </Container>
    );
};

export default Hero;
