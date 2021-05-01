import React from 'react';
import './style.css';
const Front = ({ onRouteChange }) => {
	return(
     <div>
      <div className="frontback">
        <h1> Unlimited Movies, Web series, TV Shows </h1>
        <h3>Full of entertainment package </h3>
        <h1> Try it out .... </h1>
        <a onClick={() => onRouteChange('login')}className="btn btn-lg btn-danger"> <h1>Log In</h1> </a>
      </div> 
     </div>
	);
}

export default Front;