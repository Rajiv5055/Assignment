import React from 'react';
import './style.css';
import Netflix from './Images/Icons/Netflix.png'

const Navbar = ({ onRouteChange }) => {
   return (
    <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-dark">
		 <a className="navbar-brand  text-danger" href="#"><img src={Netflix} width="100px" height="40px"/></a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">Link</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">movies</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">web series</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link text-white text-uppercase" href="#">TV SERIES</a>
		      </li>
		    </ul>
		    <form className="form-inline  w-50 my-2 my-lg-0">
		      <input className="form-control w-75 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
		      <button className="btn btn-outline-success wr-25 my-2 my-sm-0" type="submit">Search</button>
		      <button onCLick={() => onRouteChange('front')} className="btn btn-danger text-text-white font-weight-bold signIn-btn"> Log Out </button>
		      
		    </form>
		  </div>
		</nav>
   	);
}

export default Navbar;

