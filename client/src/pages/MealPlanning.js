import React from "react";
import MealList from "../components/MealPlanner/MealList";
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

export default function MealPlanning() {
  return (
    <div className="mealPlanning">
      <MealList />
    </div>
  );
}
