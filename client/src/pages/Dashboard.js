import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker/ResponsiveDateRangePicker";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import TripCard from "../components/TripCard";
import BudgetCard from "../components/BudgetCard";

const DashboardGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

export default function Dashboard() {
  return (
    <div className={`dashboard`}>
      <DashboardGrid container spacing={0}>
        <Grid item xs={12} md={6}>
          <WeatherCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <ResponsiveDateRangePicker />
        </Grid>
        <Grid item xs={12} md={6}>
          <TripCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <BudgetCard />
        </Grid>
      </DashboardGrid>
    </div>
  );
}
