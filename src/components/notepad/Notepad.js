import React from 'react';
import './Notepad.css';
import notebutton from './notebutton.png';

const Notepad=({ onRouteChange })=>{
	return(
	  <div className='notepad'>
          <h1>Notepad</h1>
          <div>
          <p><span>Title</span> Lorem ipsum dolor sit am...</p>
          <p><span>Title</span> Lorem ipsum dolor sit am...</p>
          <p><span>Title</span> Lorem ipsum dolor sit am...</p>
          <p><span>Title</span> Lorem ipsum dolor sit am...</p>
          <p><span>Title</span> Lorem ipsum dolor sit am...</p>
           <div className='notebut'>
             <button onClick={onRouteChange}>
               <img alt='' src={notebutton}/>
             </button>
           </div>
          </div>
    </div>
	);
}


export default Notepad;