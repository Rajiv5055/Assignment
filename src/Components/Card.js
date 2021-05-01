import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';
import movie from './Images/movie.jpg';
import tvseries from './Images/tvseries.jpg';
import webseries from './Images/webseries.jpg';


const Cardtype=()=>{
	return (
		<div>

	  <h1 className="text-white bg-dark"style={{ textAlign: "center"}}>CATEGORIES</h1>
      <div className="cardtype">
        <div className="card card1 bg-dark mg-3" >
		  <img className="card-img-top" src={movie} alt="Card image cap"/>
		  <div className="card-body">
		    <h5 className="card-title text-danger">MOVIES</h5>
		  </div>
		</div>
		<div className="card card1 bg-dark mg-3">
		  <img className="card-img-top" src={webseries} alt="Card image cap"/>
		  <div className="card-body">
		    <h5 className="card-title text-danger">WEB SERIES</h5>
		  </div>
		</div>
		<div className="card card1 bg-dark mg-3">
		  <img className="card-img-top" src={tvseries} alt="Card image cap"/>
		  <div className="card-body">
		    <h5 className="card-title text-danger">TV SERIES</h5>
		  </div>
		</div>
      </div>
      </div>
	);
}

export default Cardtype;