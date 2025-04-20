
import React from 'react'
import { Container,Row, Col, Form } from 'react-bootstrap';

function ContactUs() {
  return (
    <div className="pt-5 mt-5 bg-light">
        <Container className="py-5">
            <Row>
                <Col  xs={12} md={6} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.561061756896!2d72.87425167471919!3d21.20958898154428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7497a62911%3A0xa3a44d4bc6f6f588!2sShreenathji%20Society%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1745139625738!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col  xs={12} md={6} >
                <Form>
                    <Row>
                        <Col xs={12} md={12}>
                            <h4 className='' style={{textDecoration:'underline'}}>Get In Touch</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col ms={12} md={6}>
                        <label htmlFor="first_name">First Name*</label>
                        <input type="text" value="" className='form-control' id='first_name' placeholder='First Name'/>
                        </Col>
                        <Col ms={12} md={6}>
                          <label htmlFor="last-name">Last Name*</label>
                          <input type="text" className='form-control' id='last-name'placeholder='Last Name' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='form-control'id='email'placeholder='Email' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label htmlFor="phone_number">Phone-Number</label>
                        <input type="number" className='form-control' id='phone_number'placeholder='Phone-Number' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label htmlFor="text">Text</label>
                        <textarea name="" className='form-control' rows={5} id=""></textarea>
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactUs;