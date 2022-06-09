import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            sx={{
              backgroundColor: "primary.light",
              // opacity: [0.9, 0.8, 0.7],
            }}
          >
            <Typography
              sx={{ mb: 1.5 }}
              color="secondary.main"
              variant="h5"
              component="div"
            >
              {thought.thoughtText}
            </Typography>
          </Box>
          <Typography variant="body2">{thought.createdAt}</Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>
            <CommentForm thoughtId={thought._id} />
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleThought;
