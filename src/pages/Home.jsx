import React, { useEffect } from 'react';
import { useState } from "react";
import Slider from './HomePages/Slider';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import CategoryCarousel from './HomePages/CategoryCarousel';
import ProductCard from './ProductCard';
import BigBanner from './HomePages/BigBanner';
import ProductDis from './HomePages/ProductDis';


function Home() {
  const storedCart = localStorage.getItem('cartItems');
  const localStorageData = storedCart ? JSON.parse(storedCart) : [];
  const [cartItems, setCartItems] = useState(localStorageData);

  const addToCart = (prod) => {
    setCartItems(prevItems => [...prevItems, { prod, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
   <>
      <Slider/>
      <CategoryCarousel/>
      <ProductCard addToCart={addToCart}/>
      <BigBanner/>
      <ProductDis/>
   </>
  )
}

export default Home;