import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <img 
              src="/images.png" // optional: add a success image if you have
              alt="Success"
              style={{ width: '120px', marginBottom: '20px' }}
            />
            <h2 className="text-success mb-3">Thank You!</h2>
            <p className="lead">
              Your order has been placed successfully. You will receive an email confirmation shortly.
            </p>
            <Link to="/shop">
              <Button variant="primary" className="mt-4">
                Continue Shopping
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ThankYou;
