// Dependencies
import React from 'react';
import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/women">Women</NavLink></li>
        <li><NavLink activeClassName="selected" className="nav-link" to="/men">Men</NavLink></li>
        <li data-cy='go-to-wishlist'><NavLink activeClassName="selected" className="nav-link" to="/wishlist">Wishlist</NavLink></li>
      </ul>
    </div>
    <div data-cy='go-to-cart' className="shopping-cart">
      <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>
    </div>
  </nav>
);

export default Navbar;
