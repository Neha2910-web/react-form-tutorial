import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  return (
    <ul className="nav-bar">
     <li className="nav-list"><Link to='/'>Home</Link></li>
     <li className="nav-list"><Link to='/About'>About</Link></li>
     <li className="nav-list"><Link to='/profile'>Profile</Link></li>

     <li className="nav-list"><Link to='/Contact'>Contact Us</Link></li>
    </ul>
  );
}
export default Header;