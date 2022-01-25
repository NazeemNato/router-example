// importing required package for Navbar component
import React from "react";
// importing Link component from react-router-dom
// Link help us to create a link in our application
// Which can wrap around any component or <a> tag
import { Outlet, Link } from "react-router-dom";
// let's create a Navbar component
// it will be rendered in the <header> tag
function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Outlet/>
      </nav>
    </header>
  );
}
export default Navbar;