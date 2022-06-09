import React from "react";
import { Link as ReactLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h3>No Discussions Yet</h3>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          {showTitle && <h3>{title}</h3>}
          {thoughts &&
            thoughts.map((thought) => (
              <div key={thought._id}>
                <Box sx={{ p: 2, border: "1px secondary.main", boxShadow: 1 }}>
                  {showUsername ? (
                    <Typography variant="h4">
                      <Box
                        sx={{
                          p: 2,
                          border: "1px secondary.main",
                          boxShadow: 1,
                        }}
                      >
                        <Link
                          // sx={{ backgroundColor: "primary.main" }}
                          underline="hover"
                          href={`/thoughts/${thought.thoughtAuthor}`}
                        >
                          {thought.thoughtText} <br />
                        </Link>
                      </Box>
                    </Typography>
                  ) : (
                    <>
                      <Typography>
                        <span style={{ fontSize: "1rem" }}>
                          You created this on {thought.createdAt}
                        </span>
                      </Typography>
                    </>
                  )}

                  <Typography sx={{ color: "secondary.main" }}>
                    <p>Posted by {thought.thoughtAuthor}</p>
                  </Typography>
                  <Button variant="contained">
                    <Link
                      underline="none"
                      href={`/thoughts/${thought._id}`}
                      sx={{ color: "black" }}
                    >
                      Join this discussion
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
