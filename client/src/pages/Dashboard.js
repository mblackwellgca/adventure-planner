import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker/ResponsiveDateRangePicker";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import TripCard from "../components/TripCard";
import BudgetCard from "../components/BudgetCard";

const DashboardGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid red",
  minHeight: "100vh",
});

const GridItem = styled(Grid)({
  // display: "flex",
  // justifyContent: "center",
  // height: "100%",
  // width: "100%",
});

export default function Dashboard() {
  return (
    <div className={`dashboard`}>
      <DashboardGrid container spacing={0}>
        <GridItem item xs={12} md={6}>
          <WeatherCard />
        </GridItem>
        <GridItem item xs={12} md={6}>
          <ResponsiveDateRangePicker />
        </GridItem>
        <GridItem item xs={12} md={6}>
          <TripCard />
        </GridItem>
        <GridItem item xs={12} md={6}>
          <BudgetCard />
        </GridItem>
      </DashboardGrid>
    </div>
  );
}
