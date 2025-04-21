import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

function Cart() {
 const storedCart = localStorage.getItem('cartItems');
  const localStorageData = storedCart ? JSON.parse(storedCart) : [];
  
  
    return (
        <div className='pt-5 mt-5  mb-5-light'>
            <Container className='mt-5 pb-5'>
                <Row>
                    <Col ms={12} md={8}>
                        <h2 className="mb-4">Shopping Cart</h2>
                        <Card className='md-3'>
                            <Row className='g-0'>
                                <div className="col-md-4">
                                    <img src='/prodCard/prodcard-4.avif' className="img-fluid rounded-start" alt='' style={{
                                        height: "180px",
                                        objectFit: "cover",
                                        borderBottom: "1px solid #eee",
                                    }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">abcd</h5>
                                        <p className="card-text">Quantity: 0</p>
                                        <p className="card-text">
                                            <strong>$2.00</strong>
                                        </p>
                                        <button className="btn btn-outline-danger btn-sm">Remove</button>
                                    </div>
                                </div>
                            </Row>
                        </Card>
                    </Col>
                    <Col ms={12} md={4}>
                        <div className="card p-4 shadow-sm">
                            <h4 className="mb-3">Order Summary</h4>
                            <ul className="list-group list-group-flush mb-3">
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <strong>0.00</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Shipping</span>
                                    <strong>free</strong>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total</span>
                                    <strong>$0.00</strong>
                                </li>
                            </ul>
                            <button className="btn btn-dark w-100">Proceed to Checkout</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;
