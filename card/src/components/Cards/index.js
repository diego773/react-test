import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import samantha from "../images/samantha.jpg";
import clarisse from "../images/clarisse.jpg";
import Card from 'react-bootstrap/Card';

function Swipe() {
  return (
    <Card>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={samantha}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Daniel and Mary</h3>
            <p>Our love takes us to the clouds.Thank you Pinder!!!!</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
            className="d-block w-100"
            src={clarisse}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Carol and Dom</h3>0000000000000
            <p>We love the outdoords.</p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={clarisse}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Card>
      
  );
}

export default Swipe;