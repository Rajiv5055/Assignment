import React from 'react';
import './style.css';

const Footer = () => {
 return (
  <div className="footer bg-dark">
      <ul className="navbar-nav  mr-auto">
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">Help center <span class="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">contact us</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">Terms of Use</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#"></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">TV SERIES</a>
		      </li>
	  </ul>
  </div>
 );
}

export default Footer;