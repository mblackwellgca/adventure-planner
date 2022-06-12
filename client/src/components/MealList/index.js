import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_MEAL } from "../../utils/mutations";
import { QUERY_MEALS } from "../../utils/queries";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Auth from "../../utils/auth";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MealList = ({ meals }) => {
  const [mealList, setMealList] = useState(meals);
  const { loading, data } = useQuery(QUERY_MEALS);
  const [removeMeal, { error }] = useMutation(REMOVE_MEAL);

  const handleRemoveMeal = async (mealId) => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) {
        return false;
      }
      try {
        const { data } = await removeMeal({
          variables: { mealId },
        });
        removeMeal(mealId);
        setMealList("");
      if (meals.meal._id=== mealId) {
        return mealList;
      }
      } catch (err) {
        console.error(err);
  }
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {weekDays.map((day) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                p: 2,
                boxShadow: 2,
                minHeight: 500,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <CardContent>
                <Typography color="secondary" variant="h6" component="div">
                  {day}
                </Typography>
                <List>
                  {meals.map((meal) => {
                    if (meal.day === day)
                      return (
                        <div key={meal._id}>
                          <p> {meal.type} </p>
                          <p> {meal.text} </p>
                          <p>{meal.username}</p>
                          <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleRemoveMeal(meal._id)}
                          >
                            {" "}
                            🗑️
                          </button>
                        </div>
                      );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};


export default MealList;
