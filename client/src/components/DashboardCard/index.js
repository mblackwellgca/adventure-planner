import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";

export default function DashboardCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Weather</Typography>
        <WeatherCard />
      </CardContent>
    </Card>
  );
}
