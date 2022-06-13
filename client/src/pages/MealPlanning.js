import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import MealList from "../components/MealList";
import MealForm from "../components/MealForm";
import { QUERY_MEALS } from "../utils/queries";
import Background from "../assets/images/meal-wallpaper.png";
import { Card, CardContent, Box, Container, CssBaseline } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    padding: "2rem",
  },
}));

const MealPlanning = () => {
  const { loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals || [];
  const classes = useStyles();
  return loading ? (
    <div>Loading!</div>
  ) : (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Card
          sx={{
            p: 2,
            mb: 2,
            display: "flex",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <MealForm />
          </CardContent>
        </Card>
        <Box className="mealPlanning">
          <MealList meals={meals} />
        </Box>
      </Container>
    </div>
  );
};

export default MealPlanning;
