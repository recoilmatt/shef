import React from 'react'
import Matt from '../Images/Matt.jpg'
import Shef from "../Images/Shef.svg"

function Search( { getSearch, search, updateSearch }) {
 
    return (
        <header>
          <div className="header--title">
            <h1 className="header--title"><img style={{height:'32px'}} src={Shef} alt="Shef"/> Shef</h1>
          </div>
          <div className="search-form">
            <form onSubmit={getSearch} className="search-form">
              <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
                placeholder="Enter a recipe or food here to start..."
                label="Search"
              />
              <button className="search-button" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="header--profile">
            <button className="search-button" style={{display: "flex", alignItems:"center", marginRight: "8px" }}>
              <img className="avatar" src={Matt} alt='matt'/>
            <span>Welcome Matt!</span>
            </button>
        
          </div>
        </header>
    
    )
}

export default Search
