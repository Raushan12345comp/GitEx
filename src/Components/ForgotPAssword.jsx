import React, { useState, useContext } from 'react'
import {
    Container, 
    Button,
    Form,
    FormGroup,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Alert
} from "reactstrap"

import firebase from "firebase/app"
// import {UserContext} from "../context/UserContext"
import {Link}  from "react-router-dom";
import {toast} from "react-toastify";


const ForgotPassword = () => {

    // const context = useContext(UserContext)

    const [email , setEmail] = useState('')
    // const [message, setMessage] = useState('')
    // const [error, setError] = useState('')


    const notify = () => {
        toast("check your inbox")
    }

    const handleResetPassword = () => {
        firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(res => {
            console.log(res);
        // setMessage("check your inbox")
            notify()

        })
        .catch(error => {
            console.log(error);
            toast(error.message, {
                type: "message"
            })
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleResetPassword()

    }

//   if (context.user?.uid) {
//       return <Redirect to="/" />
//   } 

  return (
      <>
    <Container className='text-center auth-cont'>
        <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <CardHeader className="auth-card-header">PASSWORD RESET</CardHeader>
                        <CardBody>

                {/* {message && <Alert variant="danger">{message}</Alert>} */}


                            <FormGroup row>
                               
                                <Col>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Enter your email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        className="text-white"

                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type="submit" className='auth-btn'>
                                Confirm
                            </Button>
                        </CardFooter>
                    </Form>
                    <div className="w-100 text-center  p-3">
                        <Link to="/Login" className="auth-link">Login</Link>
                    </div>
                </Card>
            </Col>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/Signup" className='auth-link'>Sign up</Link>
            </div>
        </Row>
    </Container>
   
    </>
);
}

export default ForgotPassword
