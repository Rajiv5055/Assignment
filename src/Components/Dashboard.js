import React from 'react';
import Corousel from './Corousel';
import Cardtype from './Card';
import Movies from './Movies';
import Webseries from './Webseries';


const Dashboard = ({ onRouteChange }) =>{
	return(
		<div className="dashboard">

		    <Corousel />
		    <Cardtype />
		    <Movies />
		    <Webseries />
    
		</div>
	);
}
export default Dashboard;