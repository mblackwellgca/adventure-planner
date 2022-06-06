import React, { useState } from "react";
import MealForm from "./MealForm";
import Meal from "./Meal";

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
      <Meal
        meal={meal}
        completeMealItem={completeMealItem}
        removeMealItem={removeMealItem}
        editMealItem={editMealItem}
      ></Meal>
    </div>
  );
}

export default MealList;
