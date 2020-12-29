import React from 'react';
import './This.css';
import lastmonth from './lastmonth.png';
const LastMonth=()=>{
	return(
       <div className='thisMonth'>
         <p>Last Month</p>
         <hr/>
         <div className='thism'>
	      <h1 className='per'>+60.6%</h1>
	      <img alt='' src={lastmonth}/>
	     </div>
       </div>
	);
}

export default LastMonth;