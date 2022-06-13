import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker";
import TripCard from "../components/TripCard";
import BudgetCard from "../components/BudgetCard";
import "../assets/css/Dashboard.css";
import { styled } from "@mui/system";
import { Grid, Divider } from "@mui/material";

const DashboardGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
});

export default function Dashboard() {
  return (
    <div className={`dashboard`}>
      <Divider
        sx={{
          mt: 5,
          mb: 5,
        }}
      >
        My Dashboard
      </Divider>
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
