import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/css/home.css";
import Background from "../../src/assets/images/aleksandra-boguslawska-MS7KD9Ti7FQ-unsplash.png";
import Logo from "../../src/assets/images/group-it-logo.png";
import { Link as Scroll } from "react-scroll";
import { Grid, Box, CssBaseline, Typography } from "@mui/material";
import { IconButton, Collapse } from "@material-ui/core";
import HomeCards from "../components/HomeCards";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  container: {
    textAlign: "center",
  },
}));

const Home = () => {
  const nodeRef = useRef(null);
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div ref={nodeRef} className={classes.root}>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        minHeight={100}
        sx={{ display: "flex", flexWrap: "wrap" }}
      >
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
            {" "}
            <Box
              component={"img"}
              className="logo"
              src={Logo}
              sx={{
                display: "flex",
              }}
            />
          </Box>
        </Grid>
        <Grid
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
                <div className={classes.container}>
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
                        sx={{ fontSize: "4rem", color: "secondary.main" }}
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
    </div>
  );
};
export default Home;

{
  /* <>
        <p>
          <Link className="" to="/Destinations">
            Plan my next trip!
          </Link>
        </p>
        <div className="trips">
          <h1>Or choose one of your saved trips</h1>
          <div></div>
        </div>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
            textDecoration: "none",
            fontSize: "2rem",
          }}
        >
          The Group Adventure Travel Planner
        </Typography>
        <p className="message">
          Planning a getaway with family or friends and looking for a trip
          planner app to help you figure out the logistics? There are endless
          details that go into planning a group trip. Coordinating flights,
          arranging transportation, planning for meals, scheduling activities
          and figuring out accommodation can feel like impossible tasks when a
          lot of people are involved.
        </p>
        <img className="boardwalk" src={Logo} alt="boardwalk" />;
        <p className="bold">Boldly go somewhere you have not gone before!</p>
        <p className="credentials">
          Please&nbsp;{" "}
          <Link className=" " to="/login">
            Log in&nbsp;
          </Link>
          or&nbsp;{" "}
          <Link className=" " to="/signup">
            Sign up&nbsp;
          </Link>
          to begin!
        </p>
      </> */
}
