import React, { useContext, useEffect } from 'react'
import { Badge, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { samplecontext } from '../App';
import { Link } from 'react-router-dom';

const NavigationUser = () => {
    const sample=useContext(samplecontext);
    const{setshowhomenav}=sample;
    useEffect(() => {
        setshowhomenav(false)
    }, [])
  return (
    <div>
        <div>
        <Navbar  expand="lg"  className='navbar'>
        <Container>
            <Navbar.Brand href="#home" className='app-head'>
            {/* <img
                
                width="75"
                height="75"
                className="d-inline-block align-top"
                
                /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto text-light">
                
                {/* <Nav.Link className='nav-li text-light' href="#home" >Profile */}
                {/* <Link className="link-div" to={"/popular"}>Popular Movies</Link>  */}
                {/* </Nav.Link> */}
                {/* <Nav.Link className='nav-li' href="#link">Events */}
                {/* <Link className="link-div" to={"/latest"}>Latest Movies</Link>   */}
                {/* </Nav.Link> */}
                <NavDropdown className='text-light fs-4 drop-link' title="Events" >
                    <NavDropdown.Item className='text-light' href="#action3">
                        <Link className="link-div text-dark fs-4 " to={"/eventCreate"}>
                            Create Events</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    <Link className="link-div text-dark fs-4 " to={"/viewevent"}>
                        View Events
                    </Link>    
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav-li' href="#link">
                    <Link className="link-div text-light fs-4 " to={"/eventInvitation"}>Invitations</Link> 
                    <Badge bg="danger" position="top">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                {/* <Link className="link-div text-dark fs-3 " to={"/comedy"}>Comedy Movies</Link> */}
                </Nav.Link>
                <Nav.Link className='nav-li text-light' href="#home" >
                    <Link className="link-div text-light fs-4 " to={"/"}>Logout</Link> 
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
    <div className='nav-user-div'>
        <div className='main-banner1 d-flex'>
            <div className=''>
                <h2>Life Is An Event </h2>
                <h2>Make It Memorable</h2>
            </div>
            <div className='pt-5 ps-4'>
                <img src="https://www.adobe.com/content/dam/www/us/en/events/overview-page/eventshub_evergreen_opengraph_1200x630_2x.jpg" alt="" style={{height:'300px',width:'500px',borderRadius:'8px'}}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavigationUser