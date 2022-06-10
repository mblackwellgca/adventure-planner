import React from "react";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>Be the first to start a discussion.</h3>;
  }

  return (
    <div>
      <Card sx={{ p: 2, mt: 3, boxShadow: 1 }}>
        <CardContent>
          {showTitle && <h3>{title}</h3>}
          {thoughts &&
            thoughts.map((thought) => (
              <div key={thought._id}>
                <Box sx={{ p: 2, mt: 3, boxShadow: 1 }}>
                  {showUsername ? (
                    <Typography variant="h4">
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "secondary.extraLight",
                          borderRadius: "3px",
                        }}
                      >
                        <Link
                          underline="hover"
                          href={`/thoughts/${thought._id}`}
                        >
                          {thought.thoughtText} <br />
                        </Link>
                      </Box>
                    </Typography>
                  ) : (
                    <>
                      <Typography sx={{ fontSize: "1rem" }}>
                        You created this on {thought.createdAt}
                      </Typography>
                    </>
                  )}

                  <Typography sx={{ color: "secondary.main" }}>
                    Posted by {thought.thoughtAuthor}
                  </Typography>
                  <Button variant="contained">
                    <Link
                      underline="none"
                      href={`/thoughts/${thought._id}`}
                      sx={{ color: "black" }}
                    >
                      <FontAwesomeIcon
                        icon={faCommentAlt}
                        color="#6B3567"
                        size="lg"
                      />
                    </Link>
                  </Button>
                </Box>
              </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ThoughtList;
