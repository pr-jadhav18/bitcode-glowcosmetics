
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Login() {
    
    return (
        <div className="pt-5 mt-5 bg-light">
            <Container className="py-5">
                <Card className="py-5 d-flex justify-content-center align-items-center">
                    <h4 style={{ color: "blue", fontSize: "20px", textAlign: "center" }}>LOGIN</h4>
                    <Col>
                        <Form className="mt-4" >
                          
                                
                            <Row>
                                <Col xs={12} >
                                    <label htmlFor="last-name">Email</label>
                                    <input type="email" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="email" placeholder="Email" />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs={12} >
                                    <label htmlFor="last-name">Password</label>
                                    <input type="password" className="form-control" style={{width:"700px",border:"2px solid black"}} id="password" placeholder="password" />
                                </Col>
                            </Row><br />
                            
                            <div className="text-center mt-3">
                                <Button className="w-100" variant="info" >
                                     Login 
                                </Button>
                            </div><br />
                            </Form>
                             
                             <div style={{textAlign:"center"}}>
                                <Link to="/register" style={{ fontWeight: "bold", 
                                    color: "black", 
                                    backgroundColor: "lightpink",
                                     padding: "8px 16px",
                                      borderRadius: "5px", 
                                      display: "inline-block" }}>
                                    I have do not acount, Register.
                                </Link>
                             </div>

                        
                    </Col>
                </Card>
            </Container>
        </div>
    )
}
export default Login;