import React from "react";
import { useState } from 'react';
var requestOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Basic YzNjMjAyY2Y3ZDVhMTUzZTQ5MGU2NDgxY2I3NjlhY2E6OWQ3YjM5MDQ4MmU4YjNlMmU3NWRhNDEzMWFkOWQ3NmY=`
  },
  redirect: 'follow'
};

function Destinations(props) {
  const [items, setItems] = useState([  ]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  var slug = [];
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Let's go to ${search}!`)
    fetch(`https://api.roadgoat.com/api/v2/destinations/auto_complete?q=${search}`, requestOptions)
    .then(response => response.json())
    .then(function (data) {
      bulkApi(data["data"][0]["attributes"]["slug"]);
    })
    .catch(error => console.log('error', error));
  }
  function bulkApi(slug){
    fetch(`https://api.roadgoat.com/api/v2/destinations/${slug}`, requestOptions)
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
     })
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
