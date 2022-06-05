import React from "react";
import { useState } from 'react';
import searchResults from "../components/Locations/index";

function Locations() {
    
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Let's go to ${search}!`)
  }

  return (
    <div>
    <form className="locations" onSubmit={handleSubmit}>
      <label>Search for your next destination:  
        <input 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input type="submit" className="btn btn-lg btn-info m-2" id="margin-normal" margin="normal" />
    </form>
    <div>

    </div>
    </div>
  )
}

export default Locations;
