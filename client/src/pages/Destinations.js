import React from "react";
import { useState } from 'react';
import { Card, Grid, Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Hotel from '../assets/images/hotel-1749602_640.jpg';
import City from '../assets/images/dubai-1767540_640.jpg';
import Plan from '../assets/images/notepad-1130743_640.jpg';
import Car from '../assets/images/nature-4346917_640.jpg';
import Safe from '../assets/images/japan-2014618_640.jpg';
import Money from '../assets/images/banknotes-209104_640.jpg';

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
    // alert(`Let's go to ${search}!`)
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
      })
  }
  return (
    <div>

      <Box className="locations" onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' }, mt: 5,
          mb: 5,
          display: "flex",
          justifyContent: "center"
        }}
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="Where do you want to go?" variant="outlined" value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <Button type="submit" size="medium" variant="contained" className="btn btn-lg btn-info m-2" id="margin-normal" margin="normal">Search</Button>
      </Box>

      <div>
        <div>
          {
            items.map((data) => (
              <div key={data.id} >
                <div sx={{
                  mt: 5,
                  mb: 5,
                  display: "flex",
                  justifyContent: "center"
                }}>

                  <Divider sx={{
                    mt: 5,
                    mb: 5
                  }}>{data.data.attributes.name}</Divider>

                </div>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
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
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
                      <CardMedia
                        component="img"
                        alt="Dubai"
                        height="140"
                        image={City}
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
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
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
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
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
                          <Box sx={{ typography: 'body1' }}><b>Population:</b> {data.data.attributes.population}</Box>
                          <Box sx={{ typography: 'body1' }}><b>Popularity Rating (1-5):</b> {data.data.attributes.average_rating}</Box>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <a href={data.data.attributes.wikipedia_url} target="_blank">
                          <Button size="small">Wikipedia</Button>
                        </a>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
                      <CardMedia
                        component="img"
                        alt="Japan street"
                        height="140"
                        image={Safe}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Stay Safe
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box sx={{ typography: 'body1' }}><b>Density:</b> {data.data.attributes.destination_type}</Box>
                          <Box sx={{ typography: 'body1' }}><b>Crime Risk:</b> {data["data"]["attributes"]["safety"][data.data.attributes.name]["subText"]}</Box>
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                  </Grid>

                  <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}>
                    <Card sx={{ minWidth: 345, height: 300, boxShadow: 4 }}>
                      <CardMedia
                        component="img"
                        alt="money"
                        height="140"
                        image={Money}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Plan Your Budget
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Box sx={{ typography: 'body1' }}><b>Daily Cost:</b> {data["data"]["attributes"]["budget"][data.data.attributes.name]["text"]} | {data["data"]["attributes"]["budget"][data.data.attributes.name]["subText"]}!</Box>
                          <Box sx={{ typography: 'body1' }}><b>Cost Rating (1-8):</b> {data["data"]["attributes"]["budget"][data.data.attributes.name]["value"]}</Box>
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                  </Grid>

                </Grid>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Destinations;