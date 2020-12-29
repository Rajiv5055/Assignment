import React from 'react';
import './SearchBar.css'

const SearchBar=()=>{
	return(
      <div className='searchplace'>
         <input className='searchbar' type='text' placeholder='Search'/>
      </div>
	);
}

export default SearchBar;