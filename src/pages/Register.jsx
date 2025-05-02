import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Register(){
     const[formData,setFormData] = useState({ email: "", password: "" });
    
      
       const handalChange = (event) =>{
          const { id,value } = event.target;
          setFormData({...formData,[id]:value});
       }
       useEffect(() => {
        const storedForm = localStorage.getItem('Users');
        const localStorageData = storedForm ? JSON.parse(storedForm) : {};
        setFormData(localStorageData);
      }, []);

   function handalLogin(event){
       event.preventDefault();
       localStorage.setItem("users",JSON.stringify(formData));
       console.log("handalLogin");
       
   }
    return (
        <div className="pt-5 mt-5 bg-light">
        <Container className="py-5">
            <Card className="py-5 d-flex justify-content-center align-items-center">
                <h4 style={{ color: "blue", fontSize: "20px", textAlign: "center" }}>PLEASE  FILL  THE  DETAILS  FOR  REGISTER!!!!</h4>
                <Col>
                    <Form className="mt-4" >
                        <Row className="mb-3">
                            <Col xs={12}>
                                <label htmlFor="first-name" className="">First Name</label>
                                <input type="text" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="first-name" placeholder="First Name"  onChange={handalChange}  />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col xs={12} >
                                <label htmlFor="middle-name">middle Name</label>
                                <input type="text" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="middle-name" placeholder="middle Name"  onChange={handalChange}  />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col xs={12} >
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" className="form-control" style={{width:"700px",border:"2px solid black"}} id="last-name" placeholder="Last Name"  onChange={handalChange} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col xs={12} >
                                <label htmlFor="last-name">Email</label>
                                <input type="email" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="email" placeholder="Email"  onChange={handalChange} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col xs={12} >
                                <label htmlFor="last-name">Password</label>
                                <input type="password" className="form-control" style={{width:"700px",border:"2px solid black"}} id="password" placeholder="password"  onChange={handalChange} />
                            </Col>
                        </Row><br />
                        <Row>
                            <Col xs={12} >
                                <label htmlFor="last-name">Mobile Number</label>
                                <input type="number" className="form-control"  style={{width:"700px",border:"2px solid black"}} id="number" placeholder="Mobile Number"  onChange={handalChange} />
                            </Col>
                        </Row><br />

                        <div className="text-center mt-3">
                            <Button className="w-100" variant="info" type="submit" onClick={handalLogin}>
                                Register
                            </Button>
                        </div><br />
                         
                         <div style={{textAlign:"center"}}>
                            <Link href="/login" style={{ fontWeight: "bold", 
                                color: "black", 
                                backgroundColor: "lightpink",
                                 padding: "8px 16px",
                                  borderRadius: "5px", 
                                  display: "inline-block" }}>
                                i Have already acount , Login.
                            </Link>
                         </div>

                    </Form>
                </Col>
            </Card>
        </Container>
    </div>
    )
}
export default Register;