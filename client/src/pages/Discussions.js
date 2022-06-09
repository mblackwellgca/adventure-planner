import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { QUERY_THOUGHTS } from "../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <Container maxWidth="sm">
      <Card sx={{ p: 2, m: 3, display: "flex", justifyContent: "center" }}>
        <CardContent>
          <ThoughtForm
            sx={{ flexDirection: "column", justifyContent: "center" }}
          />
        </CardContent>
      </Card>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <Box>
          <ThoughtList thoughts={thoughts} title="Discussions..." />
        </Box>
      )}
    </Container>
  );
};

export default Profile;
