import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
   const navStyle = {
      color: 'white',
   };
   return (
      <nav>
         <h3>logo</h3>
         <ul>
            <Link style={navStyle} to="/about">
               <li>About</li>
            </Link>
            <Link style={navStyle } to="./shop">
               <li>Shop</li>
            </Link>
         </ul>
      </nav>
   );
}

export default Nav;
