import React, { useState } from "react";
import "../../assets//css/WeatherCard.css";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
const api = {
  key: "d0ec0bc12a2d2e358f70d304e2a267fd",
  base: "https://api.openweathermap.org/data/2.5/",
};

const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: "0 auto",
});

export default function WeatherCard() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          console.log(query);
          setWeather(result);
          setQuery("");
        });
    }
  };
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <CardStyled
      className={`gradient-card ${
        typeof weather.main != "undefined"
          ? weather.main.temp > 61
            ? "App warm"
            : "App"
          : "app"
      }`}
    >
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontSize: "32px",
            fontWeight: 500,
            textAlign: "center",
            textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
          }}
        >
          Weather
        </Typography>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city or state..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="">
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°f</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </CardContent>
    </CardStyled>
  );
}
