import React from "react";
import Maldives from "../../assets/images/pexels-asad-photo-maldives-1450360.png";
import Meal from "../../assets/images/meal-planner.png";
import Lightbulb from "../../assets/images/lightbulb.png";
import Collaborate from "../../assets/images/collaborate.png";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import details from "./CardDetails";

// const styled = createStyled({
//   root: {
//     maxWidth: 375,
//     background: "rgba(0,0,0,0.5)",
//     margin: "20px",
//   },
//   media: {
//     height: 250,
//   },
// });

export default function HomeCards() {
  // const classes = useStyles();
  return (
    <Grid id="home-cards" container spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            maxWidth: 375,
            color: "#FFF",
            background: "rgba(0, 182, 195, 0.5)",
            margin: "20px",
          }}
        >
          <CardMedia
            // className={classes.media}
            component="img"
            image={Maldives}
            alt="Maldives"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[0].title}
            </Typography>
            <Typography variant="body2" color="secondary.main">
              {details[0].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card>
          <CardMedia
            // className={classes.media}
            component="img"
            image={Lightbulb}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[1].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details[1].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card>
          <CardMedia
            // className={classes.media}
            component="img"
            image={Collaborate}
            alt="people pointing at a laptop screen together"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[2].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details[2].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card>
          <CardMedia
            // className={classes.media}
            component="img"
            image={Meal}
            alt="prepared meals"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[3].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details[3].description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
