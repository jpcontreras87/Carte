import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import First from '../../assets/images/carousel1.jpg';
import Second from '../../assets/images/carousel2.jpg';
import Third from '../../assets/images/carousel3.jpg';

function IndividualIntervalsExample() {
    return (
        <Carousel fade>
            <Carousel.Item interval={4000}>
                <img className="d-block w-100" src={First} alt="First slide" />
                <Carousel.Caption>
                    <h3>Powerful menu management</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className="d-block w-100" src={Second} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Dine-In and Online Ordering with POS Integration</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className="d-block w-100" src={Third} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Best-in-class digital menu</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;
