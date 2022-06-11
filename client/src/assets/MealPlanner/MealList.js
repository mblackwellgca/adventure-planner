import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MealForm from "./MealForm";
import Meal from "./Meal";
import { v4 as uuidv4 } from "uuid";

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

function MealList() {
  const [meal, setMeal] = useState([]);

  // Function to add a Meal list item
  const addMealItem = (item) => {
    console.log("🚀 ~ file: MealList.js ~ line 10 ~ addMealItem ~ item", item);
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new Meal list item to the existing array of objects
    const newMeal = [item, ...meal];
    console.log(newMeal);

    // Call setMeal to update state with our new set of Meal list items
    setMeal(newMeal);
  };

  // Function to mark Meal list item as complete
  const completeMealItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedMeal = meal.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedMeal);
    setMeal(updatedMeal);
  };

  // Function to remove Meal list item and update state
  const removeMealItem = (id) => {
    const updatedMeal = [...meal].filter((item) => item.id !== id);

    setMeal(updatedMeal);
  };

  // Function to edit the Meal list item
  const editMealItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setMeal((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What meal would you like to add to the meal planner?</h1>
      <MealForm onSubmit={addMealItem} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {weekDays.map((day) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardContent>
                    <Typography color="secondary" variant="h6" component="div">
                      {day}
                    </Typography>
                    <Demo>
                      <List>
                        <Meal
                          key={uuidv4()}
                          day={day}
                          meal={meal}
                          completeMealItem={completeMealItem}
                          removeMealItem={removeMealItem}
                          editMealItem={editMealItem}
                        ></Meal>
                      </List>
                    </Demo>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default MealList;
