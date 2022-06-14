import { React } from "react";
import Maldives from "../../assets/images/pexels-asad-photo-maldives-1450360.png";
import Meal from "../../assets/images/meal-planner.png";
import Lightbulb from "../../assets/images/lightbulb.png";
import Collaborate from "../../assets/images/collaborate.png";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

import { styled } from "@mui/system";
import details from "./CardDetails";

const StyledCard = styled(Card)({
  maxWidth: 375,
  maxHeight: 400,
  background: "rgba(255, 255, 255, 0.8)",
  // "rgba(0, 182, 195, 0.5)",
  margin: "20px",
  color: "primary.main",
});

export default function HomeCards() {
  return (
    <Grid id="home-cards" container spacing={2}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <StyledCard>
          <CardMedia component="img" image={Maldives} alt="Maldives" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[0].title}
            </Typography>
            <Typography variant="body2">{details[0].description}</Typography>
          </CardContent>
        </StyledCard>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <StyledCard>
          <CardMedia component="img" image={Lightbulb} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[1].title}
            </Typography>
            <Typography variant="body2">{details[1].description}</Typography>
          </CardContent>
        </StyledCard>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <StyledCard>
          <CardMedia
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
        </StyledCard>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <StyledCard>
          <CardMedia component="img" image={Meal} alt="prepared meals" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {details[3].title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details[3].description}
            </Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    </Grid>
  );
}
