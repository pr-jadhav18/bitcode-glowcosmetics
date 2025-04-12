import React from 'react';
import Slider from './HomePages/Slider';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import CategoryCarousel from './HomePages/CategoryCarousel';
import ProductCard from './ProductCard';
import BigBanner from './HomePages/BigBanner';


function Home() {
  return (
   <>
      <Slider/>
      <CategoryCarousel/>
      <ProductCard/>
      <BigBanner/>
   </>
  )
}

export default Home;