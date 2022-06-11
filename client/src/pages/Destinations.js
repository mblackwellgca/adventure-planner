import React from "react";
import { useState } from 'react';
import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker/ResponsiveDateRangePicker";

function Destinations(props) {
  const [items, setItems] = useState([  ]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Let's go to ${search}!`)
    var myHeader = ("Authorization:", "Basic YzNjMjAyY2Y3ZDVhMTUzZTQ5MGU2NDgxY2I3NjlhY2E6OWQ3YjM5MDQ4MmU4YjNlMmU3NWRhNDEzMWFkOWQ3NmY=");
  var requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': `Basic YzNjMjAyY2Y3ZDVhMTUzZTQ5MGU2NDgxY2I3NjlhY2E6OWQ3YjM5MDQ4MmU4YjNlMmU3NWRhNDEzMWFkOWQ3NmY=`
    },
    // body: raw,
    redirect: 'follow'
  };
    fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
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
      <ResponsiveDateRangePicker />
    </form>
    <div>
      <div>
            {
              items.map((items) => (
              <div key = { items.id } >
                  </div>
              ))
          }
      </div>
    </div>
    </div>
  )
}
export default Destinations;