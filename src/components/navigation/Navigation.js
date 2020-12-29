import React from 'react';
import './navigation.css'
import Dash from './Dash.png';
import School from './School.png';
import Setting from './Setting.png';

const Navigation=()=>{
  return(
    <div>
     <div>
      <ul className='navrect'>
		  <li><div>
                  <img className='imGIcon toP1' alt='' src={Dash}/>
		         <a href="#home">DashBoard</a>
		   </div></li>
		  <li><div>
                  <img className='imGIcon toP2' alt='' src={School}/>
		         <a href="#home">Lorem</a>
		   </div></li>
		   <li><div>
                  <img className='imGIcon toP3' alt='' src={Setting}/>
		         <a href="#home">Ipsum</a>
		   </div></li>
      </ul>
    </div>
   
  </div>
  );
}

export default Navigation;