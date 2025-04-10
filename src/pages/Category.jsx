import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';

function Category() {
    return (
        <>
            <Container className='mt-3 mb-3'>
                <p className='text-center fw-bold gradient-text fs-2 '>Our Categories</p>
                <Row>
                    <Col xs={6} md={2} className='text-center flex-shrink:0'>
                        <Image src="/Categories/lipstic.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder" }}>Lipstick</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-1.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "50px" }}>serum</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-2.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>MackUp-Brush</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-3.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>MackUp-Pallet</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-4.jpg" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Pawder</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-5.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Nail Glitter</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-6.avif" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>EyeShadow-Pallet</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-7.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Concealer</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-8.jpg" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Foundation</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-9.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Primer</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-11.webp" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>Eye-Liner</p>
                    </Col>

                    <Col xs={6} md={2}>
                        <Image src="/Categories/category-10.avif" roundedCircle style={{ width: '150px', height: '150px', border: "2px solid black" }} />
                        <p style={{ textAlign: "center", fontWeight: "bolder", marginRight: "40px" }}>SunScreen-Lotion</p>
                    </Col>



                </Row>
            </Container>
        </>
    )
}

export default Category;