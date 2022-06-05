import React from "react";
import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

function Locations() {
    
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The location you entered was: ${search}`)
  }

  return (
    <form className="locations" onSubmit={handleSubmit}>
      <label>Search for your next destination:
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Locations;
