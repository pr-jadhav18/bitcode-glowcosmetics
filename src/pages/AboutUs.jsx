import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

function AboutUs() {
    return (
        <div className="pt-5 mt-5 bg-light">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={12} md={6} className='text-center mb-4 mb-md-0'>
                        <Image src='/Aboutus/aboutus-1.jpg' rounded fluid></Image>
                    </Col>

                    <Col xs={12} md={6} >
                        <h2>Glow-Cosmetics</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, a vero dolorem laudantium dolore eaque optio deleniti eos tempora numquam recusandae accusantium, sunt quam distinctio rerum repellendus. Ab esse rerum totam quis tenetur necessitatibus nostrum sequi. Quod vitae veniam aspernatur rem possimus similique cupiditate quo. Animi perspiciatis voluptatum eaque quis..</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga recusandae quidem similique, officia cum explicabo iure. Facere ab commodi ipsa, itaque aliquam eveniet reprehenderit quod, necessitatibus pariatur repellat neque voluptatum nam temporibus aliquid. Corporis facere error consequuntur facilis quisquam tempora hic a molestiae asperiores quia, eaque omnis beatae, vitae earum!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil provident praesentium perspiciatis cumque molestiae asperiores quas dolorum consectetur incidunt nulla quidem maxime, optio aut ad, itaque aliquam, corrupti nam. Corrupti at aliquid quam qui, veritatis numquam aut, quas culpa dolor accusantium eos perferendis blanditiis cupiditate impedit illum quis aperiam quae officia dolores. Qui nam minima sunt, pariatur ullam hic!</p>
                        <p>
                            Join us on a journey to redefine beauty with inclusivity, sustainability, and passion at the core
                            of everything we do.
                        </p>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                        <Card style={{ padding: '10px' }}>
                            <i class="fa-solid fa-leaf fa-2x text-success mb-3" ></i>
                            <h4>Clean Beauty</h4>
                            <p>Our formulas are free from harmful ingredients and always skin-friendly.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ padding: '10px' }}>
                            <i class="fa-solid fa-heart fa-2x text-danger mb-3"></i>
                            <h4>Crualty-Free</h4>
                            <p>We never test on animals — beauty with compassion is our promise.</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ padding: '10px' }}>
                            <i class="fa-solid fa-globe fa-2x text-primary mb-3"></i>
                            <h4>Worldwide Reach</h4>
                            <p>Shipping globally so your glow can follow you everywhere.</p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
