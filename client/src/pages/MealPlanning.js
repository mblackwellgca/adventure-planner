import React from "react";
import { useQuery } from "@apollo/client";
// import MealList from "../components/MealPlanner/MealList";
import MealList from '../components/MealList';
import MealForm from '../components/MealForm';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
import { QUERY_MEALS } from "../utils/queries";

const MealPlanning = () => {
  const {loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals || [];

  return (
  <div> 
    <div>
      <MealForm />
    </div>
    <div className="mealPlanning">
      <MealList 
      meals={meals}/>
    </div>
  </div> 
  );
};

export default MealPlanning;
