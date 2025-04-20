import React from 'react';
import Slider from './HomePages/Slider';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import CategoryCarousel from './HomePages/CategoryCarousel';
import ProductCard from './ProductCard';
import BigBanner from './HomePages/BigBanner';
import ProductDis from './HomePages/ProductDis';


function Home() {
  return (
   <>
      <Slider/>
      <CategoryCarousel/>
      <ProductCard/>
      <BigBanner/>
      <ProductDis/>
   </>
  )
}

export default Home;