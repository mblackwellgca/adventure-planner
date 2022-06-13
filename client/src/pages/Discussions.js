import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { styled } from "@mui/system";
import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import { QUERY_THOUGHTS } from "../utils/queries";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Background from "../assets/images/discussions-wallpaper.png";
import Auth from "../utils/auth";

const PageStyled = styled("div")({
  minHeight: "100vh",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  padding: "2rem",
});

const Profile = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  return (
    <PageStyled className="gradient-card">
      {Auth.loggedIn() ? (
        <Container>
          <Card
            sx={{
              p: 2,
              m: 3,
              display: "flex",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
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
    </PageStyled>
  );
};

export default Profile;
