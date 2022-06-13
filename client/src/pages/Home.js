import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/system";
import "../assets/css/home.css";
import Background from "../../src/assets/images/aleksandra-boguslawska-MS7KD9Ti7FQ-unsplash.png";
import Logo from "../../src/assets/images/group-it-logo.png";
import { Link as Scroll } from "react-scroll";
import {
  Grid,
  Box,
  CssBaseline,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { IconButton, Collapse } from "@material-ui/core";
import HomeCards from "../components/HomeCards";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomeStyled = styled("div")({
  minHeight: "100%",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",

  container: {
    textAlign: "center",
  },
});

const Home = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const nodeRef = useRef(null);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <HomeStyled ref={nodeRef}>
      <CssBaseline />
      <Grid container spacing={0} minHeight={100}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              height: "100vh",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div sx={{ display: "flex", flexDirection: "column" }}>
              {" "}
              <Box
                component={"img"}
                className="logo"
                src={Logo}
                sx={{
                  display: "flex",
                }}
              />
              {!matches ? (
                <Scroll to="welcome" smooth={true}>
                  <IconButton>
                    <ExpandMoreIcon
                      sx={{ fontSize: "4rem", color: "secondary.dark" }}
                    />
                  </IconButton>
                </Scroll>
              ) : null}
            </div>
          </Box>
          {matches ? (
            <Box
              sx={{
                height: "100vh",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedSize={50}
              >
                <div>
                  <Typography variant={"h3"} color={"primary.dark"}>
                    Boldly go somewhere you have not gone before!
                  </Typography>
                </div>
              </Collapse>
            </Box>
          ) : null}
        </Grid>
        <Grid
          id="welcome"
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mx: 4,
              }}
            >
              <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedSize={50}
              >
                <div sx={{ textAlign: "center" }}>
                  <Typography variant={"h3"} color={"#FFF"}>
                    Welcome to Your Travel Planner.
                  </Typography>
                  <Typography color={"#FFF"}>
                    {" "}
                    Planning a getaway with family or friends and looking for a
                    trip planner app to help you figure out the logistics? There
                    are endless details that go into planning a group trip.
                    Coordinating flights, arranging transportation, planning for
                    meals, scheduling activities and figuring out accommodation
                    can feel like impossible tasks when a lot of people are
                    involved.
                  </Typography>
                  <Scroll to="home-cards" smooth={true}>
                    <IconButton>
                      <ExpandMoreIcon
                        sx={{ fontSize: "4rem", color: "secondary.light" }}
                      />
                    </IconButton>
                  </Scroll>
                </div>
              </Collapse>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 5,
              }}
            >
              <HomeCards />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </HomeStyled>
  );
};
export default Home;
