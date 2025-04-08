import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

function Header() {
  return (
    <Navbar  data-bs-theme="dark" expand="lg" className="w-100 fixed-top bg-info">
      <Container>
        <Navbar.Brand href="/">
        <Image src="/logo.png" width={80} height={80} />
        </Navbar.Brand>
        <Nav className="me-auto text-dark">
          <Nav.Link href="/" className='text-dark fw-bold me-4' >Home</Nav.Link>
          <Nav.Link href="/shop"  className='text-dark fw-bold me-4'>Shop</Nav.Link>
          <Nav.Link href="/aboutus"  className='text-dark fw-bold me-4'>Category</Nav.Link>
          <Nav.Link href="/aboutus"  className='text-dark fw-bold me-4'>About Us</Nav.Link>
          <Nav.Link href="/aboutus"  className='text-dark fw-bold me-4'>Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
