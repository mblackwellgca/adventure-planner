import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Typography
      sx={{ my: 2 }}
      variant="body2"
      backgroundColor="rgba(255, 255, 255, 0)"
      color="secondary.main"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Group It Travel
      </Link>{" "}
      {2022}
      {"."}
    </Typography>
  );
};

export default Footer;
