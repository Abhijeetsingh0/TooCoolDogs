import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Nav} from 'react-bootstrap';
import Typical from 'react-typical'
import './Style.css'


const NavBar = () => {
    return (
        <div className='Bottom'>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" id="dist1">
            <Typical
            steps={['TooCoolDogs', 1000, 'TooCoolDogs', 500]}
            loop={Infinity}
            wrapper="p"
            />
            </Navbar.Brand>
            <Nav className="mr-auto ">
            <Nav.Link href="/post" id="dist2" >Posts</Nav.Link>
            <Nav.Link href="/about" id="dist3" >About</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar
