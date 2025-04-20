import { Col, Container, Image, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const ProductDis = () => {
  const prodDisCount = [
    { title: "Luscious LipSticks", Image: "/prodDis/prodDis-3.jpg", Discount: "HURRY UP !!! up to 30% off", Des: "Create The Best Lip Mackup " },
    { title: "Gifting Combows", Image: "/prodDis/prodDis-2.jpeg", Discount: "HURRY UP !!! up to 20% off", Des: "Build The Perfect Look" },
    { title: "Combows", Image: "/prodDis/prodDis-1.jpg", Discount: " Big Offer  HURRY UP !!! up to 50% off", Des: "Create Multiple Look" },
    { title: "Perfect EyeMakeUp", Image: "/prodDis/prodDis-4.jpg", Discount: "HURRY UP !!! up to 10% off", Des: "Create Limitless Eye Looks  " },
  ];
  return (
    <Container className="mb-3 mt-3">
      <p>Hurry Up !!!</p>
      <Row>
        {
          prodDisCount.map((Dis, index) => (
            <Col xs={6} md={3} className='text-center flex-shrink:0' key={index}>
              <Card className="Shadow-sm " style={{ width: '18rem', border: "2px solid black" }}>
                <Card.Img
                  variant="top"
                  src={Dis.Image}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    border: "2px solid black"
                  }} />
                <Card.Body>
                  <Card.Title className="fw-bold fs-5 text-warning fst-italic">{Dis.title}</Card.Title>
                  <Card.Text>
                    <p className=" fs-5">{Dis.Des}</p>


                    <p className="fw-bold fs-5">{Dis.Discount}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>

    </Container>
  )
}
export default ProductDis;