
import React , { useEffect, useState } from 'react';
import { Card, Button, Col ,Container,Row} from "react-bootstrap";

const Shop = () => {
    const Products = [
        { id:1, Name:"Lipstick", Image: "/Categories/lipstic.webp", Price:"100", Desc:"Long-lasting matte lipstick in bold shades." },
        { id:2, Name:"Makeup Brush Set", Image:"/prodCard/prodcard-1.webp", Price:"200", Desc:"Premium quality brush set for flawless makeup application."},
        { id:3, Name:"Makeup Brush Set", Image:"/prodCard/prodcard-2.jpg", Price:"500", Desc:"Premium quality brush set for flawless makeup application."},
        { id:4, Name:"Beauty product Set", Image:"/prodCard/prodcard-3.avif", Price:"300", Desc:"use for enhancing the beauty of womens  "},
        { id:5, Name:"Primer", Image:"/prodCard/prodcard-4.avif", Price:"300", Desc:"A face primer goes underneath your makeup to help your makeup apply smoothly"},
        { id:6, Name:"Primer", Image:"/prodCard/prodcard-5.webp", Price:"500", Desc:"to smooth the skin, fill in lines and wrinkles, and create a less porous surface for your makeup"},
        { id:7, Name:"Primer", Image:"/prodCard/prodcard-6.webp", Price:"100", Desc:"it improves the overall look and feel of your face makeup"},
        { id:8, Name:"Primer", Image:"/prodCard/prodcard-8.webp", Price:"150", Desc:"helps control shine, moisturize skin, prevent fading, enhance coverage, and even slow aging"},
        {id:9, Name:"Foundation", Image:"/Shop/img-1.jpg", Price:"229", Desc:""},
        {id:10, Name:"Powder", Image:"/Shop/img-2.jpg", Price:"999", Desc:"A powder foundation helps mattify your face and has light to medium coverage"},
        {id:11, Name:"Mascara", Image:"/Shop/img-3.jpg", Price:"500", Desc:" a cosmetic especially for making the eyelashes darker and more prominent."},
        {id:12, Name:"kajal-pencil", Image:"/Shop/img-4.jpg", Price:"259", Desc:" used for the prevention and treatment of eye diseases such as blepharitis, cataract, conjunctivitis"},
        {id:13, Name:"Moisturizer", Image:"/Shop/img-6.jpg", Price:"650", Desc:" increase the skin's water content and restore the skin's innate protective barrier function."},
        {id:14, Name:"conciler", Image:"/Shop/img-7.webp", Price:"1000", Desc:" increase the skin's water content and restore the skin's innate protective barrier function."},
        {id:15, Name:"Contoner", Image:"/Shop/img-8.jpg", Price:"700", Desc:" increase the skin's water content and restore the skin's innate protective barrier function."},
        {id:16, Name:"Eye-shadow pallet", Image:"/Shop/img-9.jpg", Price:"999", Desc:" increase the skin's water content and restore the skin's innate protective barrier function."},
     ];
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
                                    src={prod.Image}
                                    style={{
                                        height: "250px",
                                        objectFit: "cover",
                                        borderBottom: "1px solid #eee",
                                    }} 
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-5">{prod.Name}</Card.Title>
                                    <Card.Text className="text-muted" style={{ height: "60px" }}>
                                        {prod.Desc}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-bold fs-5 text-success">₹{prod.Price}</span>
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