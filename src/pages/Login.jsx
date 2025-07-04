
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Login() {

    const[formData,setFormData] = useState({
        password:"",
        Email:""
    });
     const handalChange = (event) =>{
        const { id,value } = event.target;
        setFormData({...formData,[id]:value});
    }

    const handleSubmit = async (e) => {
     e.preventDefault();

     try {
      const response = await fetch("http://localhost:8000/api/user-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log(result); // You can store user info in localStorage here
      } else {
        alert(result.message || "Credentials do not match.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login.");
    }

    };
    
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
                                    <input type="email" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="Email" placeholder="Email"onChange={handalChange} />
                                </Col>
                            </Row><br />
                            <Row>
                                <Col xs={12} >
                                    <label htmlFor="last-name">Password</label>
                                    <input type="password" className="form-control" style={{width:"700px",border:"2px solid black"}} id="password" placeholder="password" onChange={handalChange} />
                                </Col>
                            </Row><br />
                            
                            <div className="text-center mt-3">
                                <Button className="w-100" variant="info" onClick={handleSubmit} >
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