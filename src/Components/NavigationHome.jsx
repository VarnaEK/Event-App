import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const NavigationHome = () => {

  
  
  return (
    <div>
        <Navbar  expand="lg"  className='navbar'>
        <Container>
            <Navbar.Brand href="#home" className='app-head'>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVohrFiWMxxBP2Kv3DtdAL6iNpxVOcC6uLNQ&usqp=CAU'
                width="75"
                height="75"
                className="d-inline-block align-top"
                
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto text-secondary">
                
                {/* <Nav.Link className='nav-li' href="#home" >
                  <Link className="link-div text-dark fs-4 " to={"/Home"}>Home</Link> 
                </Nav.Link> */}
                <Nav.Link className='nav-li' href="#home" >
                  <Link className="link-div text-light fs-4 " to={"/userReg"}>Register</Link> 
                </Nav.Link>
                <Nav.Link className='nav-li' href="#link">
                  <Link className="link-div text-light fs-4" >About</Link>  
                </Nav.Link>
                <Nav.Link className='nav-li' href="#link">
                  <Link className="link-div text-light fs-4" to={"/login"}>Login</Link>
                </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default NavigationHome