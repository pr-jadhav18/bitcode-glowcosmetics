import React from "react";
import { Card, Button, Col ,Container,Row} from "react-bootstrap";

const ProductCard = ({addToCart}) => {
 const Products = [
    { id:1, Name:"Lipstick", Image: "/Categories/lipstic.webp", Price:"100", Desc:"Long-lasting matte lipstick in bold shades." },
    { id:2, Name:"Makeup Brush Set", Image:"/prodCard/prodcard-1.webp", Price:"200", Desc:"Premium quality brush set for flawless makeup application."},
    { id:3, Name:"Makeup Brush Set", Image:"/prodCard/prodcard-2.jpg", Price:"500", Desc:"Premium quality brush set for flawless makeup application."},
    { id:4, Name:"Beauty product Set", Image:"/prodCard/prodcard-3.avif", Price:"300", Desc:"use for enhancing the beauty of womens  "},
    { id:5, Name:"Primer", Image:"/prodCard/prodcard-4.avif", Price:"300", Desc:"A face primer goes underneath your makeup to help your makeup apply smoothly"},
    { id:6, Name:"Primer", Image:"/prodCard/prodcard-5.webp", Price:"500", Desc:"to smooth the skin, fill in lines and wrinkles, and create a less porous surface for your makeup"},
    { id:7, Name:"Primer", Image:"/prodCard/prodcard-6.webp", Price:"100", Desc:"it improves the overall look and feel of your face makeup"},
    { id:8, Name:"Primer", Image:"/prodCard/prodcard-8.webp", Price:"150", Desc:"helps control shine, moisturize skin, prevent fading, enhance coverage, and even slow aging"},
 ]

  return (
    <Container className='mt-3 mb-3'>
       <p className='text-center fw-bold gradient-text fs-2 '>Feature Products</p>
      <Row>
        {
          Products.map((prod,index)=> (
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
  );
}

export default ProductCard;
