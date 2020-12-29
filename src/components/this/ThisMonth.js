import React from 'react';
import './This.css';
import thismonth from './thismonth.png';
const This=()=>{
	return(
	<div className='thisMonth'>
     <p>This Month</p>
     <hr/>
     <div className='thism'>
     <h1 className='per'>+7.6%</h1>
     <img alt='' src={thismonth}/>
     </div>
     </div>
	);
}

export default This;
