import React from "react";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      sx={{ my: 2 }}
      variant="body2"
      backgroundColor="rgba(255, 255, 255, 0)"
      color="secondary.main"
      align="center"
    >
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://group-it-travel-planner.herokuapp.com/"
      >
        Group It Travel
      </Link>{" "}
      {2022}
      {"."}
    </Typography>
  );
};

export default Footer;
