import React from 'react';
import './Sales.css';
import Sale from './Sale.png';
const Sales=()=>{
	return(
		<div className='sale'>
		  <div>
             <header>Sales Report September 2020</header>
      </div>
      <img alt='' src={Sale}/>
          <div className='saleCalc'>
               <h3 className='dateDash'>17 Sept</h3>
               <div className='salebox one'>
                  <div> <h3>$1,204.33</h3> </div>
                   <div><h6 className='val'>Revenue</h6></div>
               </div>
               <div className='salebox two'>
                 <h3>33</h3>
                 <h6 className='val'>Quotations</h6>
               </div>
          </div>  
       </div>
	);
}

export default Sales;