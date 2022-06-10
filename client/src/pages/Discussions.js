import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import { QUERY_THOUGHTS } from "../utils/queries";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <div>
      {Auth.loggedIn() ? (
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
      ) : (
        <p>
          You need to be logged in to view discussions. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

// https://unsplash.com/photos/yCMQukL013E?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

export default Profile;
