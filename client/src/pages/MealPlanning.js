import React from "react";
import { useQuery } from "@apollo/client";
import MealList from "../components/MealList";
import MealForm from "../components/MealForm";
import { QUERY_MEALS } from "../utils/queries";
import { Card, CardContent, Box, Container } from "@mui/material";

const MealPlanning = () => {
  const { loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals || [];

  return (
    <div>
      <Container>
        <Card sx={{ p: 2, m: 3, display: "flex", justifyContent: "center" }}>
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
