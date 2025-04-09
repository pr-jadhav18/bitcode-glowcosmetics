import React from 'react';
import Slider from './HomePages/Slider';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';


function Home() {
  return (
   <>
      <Slider/>
    <Container className='mt-3 mb-3'>
      
      <Row>
        <Col xs={6} md={2} className='text-center'>
          <Image src="/Categories/lipstic.webp" roundedCircle  style={{ width:'150px', height:'150px',border:"2px solid black"}}/>
          <p style={{textAlign:"center",fontWeight:"bolder"}}>Lipstick</p>
        </Col>
        <Col xs={6} md={2}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={2}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={2}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={2}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={2}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default Home;