import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Link } from "@mui/material";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Typography
      sx={{ mt: 5 }}
      variant="body2"
      color="text.secondary"
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
