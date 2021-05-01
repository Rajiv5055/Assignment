import React from 'react';
import './style.css';
const Signin = ({ onRouteChange }) => {
  return (
  	<div className="justify-content-center">
  	 <div className='card sign justify-content-center bg-dark'>
  	   <div className="card-title text-danger"><h1>Log In</h1></div>
  	   <div className='card-body'> 
  	    <form>
		  <div className="form-group">
		    <label for="exampleInputEmail1" className="text-white">Email address</label>
		    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
		  </div>
		  <div className="form-group">
		    <label for="exampleInputPassword1" className="text-white">Password</label>
		    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
		  </div>
		  <button onClick={() => onRouteChange('dashboard')} type="submit" className="btn btn-danger">Submit</button>
		</form>
		</div>
	</div>
	</div>
  	);
}

export default Signin;