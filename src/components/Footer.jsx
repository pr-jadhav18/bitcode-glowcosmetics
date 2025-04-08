import React from 'react'
import { Container, Nav, Row, Col, Stack ,Image} from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-danger text-white py-5 mt-5 w-100 fixed-bottom">
      <Container fluid>
        <Row>
          <Col md={4} className="mb-3">
          <Stack>
          <Image src="/logo.png" width={100} height={100} />
            <h2>Glow Cosmetics</h2>
            <p>Shrinathji Society, Punagam-Surat</p>
            </Stack>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Useful Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#" className="text-white">Phone No.</Nav.Link>
              <Nav.Link href="#" className="text-white">About</Nav.Link>
              <Nav.Link href="#" className="text-white">Category</Nav.Link>
              <Nav.Link href="#" className="text-white">Information</Nav.Link>
            </Nav>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact Us!</h5>
            <p>Email: poojaborse173@gmail.com</p>
            <p>Phone: 9773280363</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;