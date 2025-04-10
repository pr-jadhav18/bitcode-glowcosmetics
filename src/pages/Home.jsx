import React from 'react';
import Slider from './HomePages/Slider';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import CategoryCarousel from './HomePages/CategoryCarousel';
import ProductCard from './ProductCard';


function Home() {
  return (
   <>
      <Slider/>
      <CategoryCarousel/>
      <ProductCard/>
   </>
  )
}

export default Home;