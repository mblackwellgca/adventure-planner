import React from "react";
// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import { makeStyles } from "@material-ui/core/styles";
import { QUERY_SINGLE_THOUGHT } from "../utils/queries";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Background from "../assets/images/discussions-wallpaper.png";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    padding: "2rem",
  },
}));

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={classes.root}>
      <Card sx={{ minWidth: 275, backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <CardContent>
          <Box
            sx={{
              p: 2,
              backgroundColor: "secondary.extraLight",
              borderRadius: "3px",
            }}
          >
            <Typography
              sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}
              color="secondary.main"
              variant="h5"
              component="div"
            >
              {thought.thoughtText}
            </Typography>
          </Box>
          <Typography variant="body2">
            Posted by {thought.thoughtAuthor} on {thought.createdAt}
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          minWidth: 275,
          p: 2,
          m: 3,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <CardContent>
          {" "}
          <CommentList comments={thought.comments} />
          <CommentForm
            thoughtId={thought._id}
            sx={{ justifyContent: "center" }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleThought;
