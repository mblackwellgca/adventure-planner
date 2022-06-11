import React from "react";
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hotel from '../assets/images/hotel-1749602_640.jpg';
import Swim from '../assets/images/water-3292794_640.jpg';
import Plan from '../assets/images/notepad-1130743_640.jpg';
import Car from '../assets/images/nature-4346917_640.jpg';

var requestOptions = {
  method: 'GET',
  headers: {
    'Authorization': `Basic YzNjMjAyY2Y3ZDVhMTUzZTQ5MGU2NDgxY2I3NjlhY2E6OWQ3YjM5MDQ4MmU4YjNlMmU3NWRhNDEzMWFkOWQ3NmY=`
  },
  redirect: 'follow'
};



function Destinations(props) {
  const [items, setItems] = useState([]);
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
      .then(function (data) {
        bulkApi(data["data"][0]["attributes"]["slug"]);
      })
      .catch(error => console.log('error', error));

  }
  function bulkApi(slug) {
    fetch(`https://api.roadgoat.com/api/v2/destinations/${slug}`, requestOptions)
      .then(response => response.json())
      .then(function (data) {
        setItems([data])
        console.log(data)
        const name = [data.data.attributes.name];
        console.log(name)
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
            items.map((data) => (
              <div key={data.id} >
                <h1>{data.data.attributes.name}</h1>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="hotel"
                    height="140"
                    image={Hotel}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Find Lodging
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={data.data.attributes.airbnb_url} target="_blank">
                    <Button size="small">AirBnB</Button>
                    </a>
                    <a href={data.data.attributes.kayak_lodgings_url} target="_blank">
                    <Button size="small">Kayak Lodgings</Button>
                    </a>
                    <a href={data.data.attributes.vrbo_url} target="_blank">
                    <Button size="small">Vrbo</Button>
                    </a>
                  </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="hotel"
                    height="140"
                    image={Swim}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Make Plans
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={data.data.attributes.alltrails_url} target="_blank">
                    <Button size="small">Go Hiking</Button>
                    </a>
                    <a href={data.data.attributes.getyourguide_url} target="_blank">
                    <Button size="small">Travel Guide</Button>
                    </a>
                    <a href={data.data.attributes.google_events_url} target="_blank">
                    <Button size="small">Google Events</Button>
                    </a>
                  </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="car"
                    height="140"
                    image={Car}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Get Around
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a href={data.data.attributes.walk_score_url} target="_blank">
                    <Button size="small">Walk Score</Button>
                    </a>
                    <a href={data.data.attributes.kayak_car_rental_url} target="_blank">
                    <Button size="small">Kayak Car Rental</Button>
                    </a>
                  </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="hotel"
                    height="140"
                    image={Plan}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Learn More
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <p><b>Population:</b> {data.data.attributes.population}</p>
                    <p><b>Average Rating (1-5):</b> {data.data.attributes.average_rating}</p>
                    <a href={data.data.attributes.wikipedia_url} target="_blank">
                    <Button size="small">Wikipedia</Button>
                    </a>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  </CardActions>
                </Card>

              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Destinations;