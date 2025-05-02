import React, {  useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Header() {
  const [cartItems,setCartItems]= useState([]);
   useEffect(() => {
      const storedCart = localStorage.getItem('cartItems');
      const localStorageData = storedCart ? JSON.parse(storedCart) : [];
      setCartItems(localStorageData);
    }, []);
  
  
  return (
    <Navbar  data-bs-theme="dark" expand="lg" className="w-100 fixed-top bg-info">
      <Container>
        <Navbar.Brand href="/">
        <Image src="/logo.png" width={80} height={80} />
        </Navbar.Brand>
        <Nav className="me-auto text-dark">
          <Nav.Link href="/" className='text-dark fw-bold me-4' >Home</Nav.Link>
          <Nav.Link href="/shop"  className='text-dark fw-bold me-4'>Shop</Nav.Link>
          <Nav.Link href="/categories"  className='text-dark fw-bold me-4'>Category</Nav.Link>
          <Nav.Link href="/aboutus"  className='text-dark fw-bold me-4'>About Us</Nav.Link>
          <Nav.Link href="/contactus"  className='text-dark fw-bold me-4'>Contact Us</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="/login" className="text-dark fs-5 me-3">
            <i className="fas fa-user"></i>
          </Nav.Link>
          <Nav.Link href="/cart" className="text-dark fs-5">
            <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
            <span style={{background:"white", height:"20px", width:"20px", borderRadius:"50%", position:"absolute", right:"123px", textAlign:"center"}}>{cartItems.length}</span>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
