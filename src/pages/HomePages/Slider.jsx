import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div style={{ width: '98.99vw', paddingTop: '100px' }}>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Slider/slider1.jpg"
            alt="First slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Slider/slider2.jpg"
            alt="second slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Slider/slider3.jpg"
            alt="third slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />

          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/Slider/slider4.jpg"
            alt="forth slide"
            style={{ height: '100vh', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  )
}

export default Slider;