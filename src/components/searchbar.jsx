import React from 'react'

const SearchBar = ({city, setCity, onSearch, loading}) => {
  return (
  < >
  <div className="search-bar">
    <input type="text" placeholder="Enter city" value={city}
    onChange={(e)=> setCity(e.target.value)}
    disabled={loading}
    className="px-4 py-2 rounded-1g outline-none w-60"
    
    />
    <button  className="px-4 py-2 bg-blue-500 text-white rounded-1g hover:bg-blue-600 " onClick={onSearch} disabled={loading}>{loading? "Searching..." : "Search"}</button>
  </div>
  </>
  )
}

export default SearchBar
