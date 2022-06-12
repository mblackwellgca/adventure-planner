import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker/ResponsiveDateRangePicker";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const DashboardGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: "#DDD",
  border: "1px solid red",
  minHeight: "100vh",
});

const GridItem = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  height: 345,
  minWidth: 545,
});

export default function Dashboard() {
  // const classes = useStyles();
  return (
    <div className={`dashboard`}>
      <DashboardGrid container spacing={0}>
        <GridItem item xs={12} md={6}>
          <WeatherCard />
        </GridItem>
        <GridItem item xs={12} md={6}>
          <ResponsiveDateRangePicker />
        </GridItem>
      </DashboardGrid>
    </div>
  );
}
