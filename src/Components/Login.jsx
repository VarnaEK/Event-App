// import { Box, Button, TextField } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import{Button} from 'react-bootstrap'
import React, { useContext, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { samplecontext } from '../App'

const Login = () => {
    const nav=useNavigate();
    const sample=useContext(samplecontext);
    const{setshowfooter}=sample
    const [input, setinput] = useState(
        {
            email:" ",
            password:" "
        }
    ) 
    // useEffect(() => {
    //     setshowfooter(false)
    // }, [])
    const handleChange= (e) =>{
        setinput({...input,[e.target.name] : e.target.value})
    }
    const handleSubmit = () =>{
        nav('/Navuser')
        toast.success("Login Successfully")
    }
  return (
    <div className='vh-100 container-fluid h-custom'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
            <div className='col-md-9 col-lg-6 col-xl-5'>
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' className='img-fluid'/>
            </div>
            <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1'>
                <Form className='' onSubmit={handleSubmit}>
                    <h1 className='text-center fw-bold mb-5'>Login Here</h1>
                    <Form.Group className="mb-3 fw-bold fs-4" controlId="formBasicEmail">
                        <Form.Label className=''>Email address</Form.Label>
                        <Form.Control
                        type="email"
                        name="email" 
                        placeholder="Enter email" 
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 fw-bold fs-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password" 
                        name='password'
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        /> 
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label className="form-check-label" for="form2Example3">
                            Remember me
                        </label>
                        </div> */}
                        <a href="#!" className="text-body">Forgot password?</a>
                    </div>
                    <div className='text-center text-lg-start mt-4 pt-2'>
                        <Button variant="primary" type="submit" className='btn btn-dark btn-lg'>
                            Submit
                        </Button>
                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/userReg"
                            className="link-danger">Register</a></p>
                    </div>
                </Form>
            </div>
        </div>
    
    </div>
  )
}

export default Login