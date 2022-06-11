import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
// import ResponsiveDateRangePicker from "../components/ResponsiveDateRangePicker/ResponsiveDateRangePicker";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <WeatherCard />
    </div>
  );
}
