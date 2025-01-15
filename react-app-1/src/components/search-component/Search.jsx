import * as React from 'react';
import './search.css'
function SearchComp() {
    return (
      <div className="SearchComp">
        <p className="search-text">Search</p>
        <input type="text" className="input-text"/>
        <button className='btn-send'>Send</button>
      </div>
    );
} 
  
export default SearchComp;