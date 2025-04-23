import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigator = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    const localStorageData = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(localStorageData);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.prod.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const subtotal = cartItems.reduce((total, item) => {
    const price = item.prod.Price ?? 0;
    const quantity = item.prod.quantity ?? 1;
    return total + price * quantity;
  }, 0).toFixed(2);
   
 const PlaceOrder = () => {
  localStorage.removeItem('cartItems');
  setCartItems([]);
  navigator('/thankyou');
 }

  return (
    <div className='pt-5 mt-5  mb-5-light'>
      <Container className='mt-5 pb-5'>
        <Row>
          <Col ms={12} md={8}>
            <h2 className="mb-4">Shopping Cart</h2>
            {
              cartItems.map((value, index) => (
                <Card className='md-3 mb-2'>

                  <Row className='g-0' key={index}>
                    <div className="col-md-4">
                      <img src={value.prod.Image} className="img-fluid rounded-start" alt='' style={{
                        height: "180px",
                        objectFit: "cover",
                        borderBottom: "1px solid #eee",
                      }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{value.prod.Name}</h5>
                        <p className="card-text">Quantity: {value.quantity}</p>
                        <p className="card-text">
                          <strong>${value.prod.Price}</strong>
                        </p>
                        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveItem(value.prod.id)}>Remove</button>
                      </div>
                    </div>
                  </Row>
                </Card>
              ))
            }
          </Col>
          <Col ms={12} md={4}>
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Order Summary</h4>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <strong>${subtotal}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <strong>free</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>${subtotal}</strong>
                </li>
              </ul>
              <button className="btn btn-dark w-100" onClick={()=>PlaceOrder()}>Proceed to Checkout</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
