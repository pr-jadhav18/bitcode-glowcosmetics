
import React , { useEffect, useState } from 'react';
import { Card, Button, Col ,Container,Row} from "react-bootstrap";

const Shop = () => {

    const [Products,setAllProducts] = useState([]);

    async function getallProduct() {
        var url = "http://localhost:8000/api/product/all";
        var response =await fetch(url);
        var result = await response.json();
        setAllProducts(result);
    }

    useEffect(()=>{
        getallProduct();
    },[]);
  
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
        <Container className='mt-3 mb-3' style={{paddingTop:'100px'}}>
            <p className='text-center fw-bold gradient-text fs-2 '>Shop Products</p>
            <Row>
                {
                    Products.map((prod, index) => (
                        <Col xs={6} md={3} className='text-center flex-shrink:0' key={index}>
                            <Card className="shadow-sm rounded-4" style={{ width: "18rem", border: "1px solid #ddd" }}>
                                <Card.Img
                                    variant="top"
                                    src={`http://localhost:8000/uploads/${prod.image}`}
                                    style={{
                                        height: "250px",
                                        objectFit: "cover",
                                        borderBottom: "1px solid #eee",
                                    }} 
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-5">{prod.name}</Card.Title>
                                    <Card.Text className="text-muted" style={{ height: "60px" }}>
                                        {prod.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-bold fs-5 text-success">₹{prod.price}</span>
                                        <Button variant="dark" onClick={() => addToCart(prod)}>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Shop;