import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
  return (
  
    
  
//     <ul className="nav-bar">
//      <li className="nav-list"><Link to='/'>Home</Link></li>
//      <li className="nav-list"><Link to='/About'>About</Link></li>
    
//       <li className='nav-list'><Link to='/formik'>Formik Form</Link> </li>
//       <li className='nav-list'><Link to='/simple'>Simple Form</Link>  </li>
//       <li className='nav-list'><Link to='/final'>Final Form</Link> </li>
    
//  <li className="nav-list"><Link to='/Contact'>Contact Us</Link></li>
 
    
//     </ul>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      <Link to="/simple">Simple Form</Link>
      <Link to="/formik">Formik Form</Link>
      <Link to="/final">Final Form</Link>
     
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>


  );
}
export default Header;