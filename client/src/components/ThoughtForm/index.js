import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";
import { QUERY_THOUGHTS } from "../../utils/queries";

import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const ThoughtForm = () => {
  const [thoughtText, setThoughtText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtText,
          thoughtAuthor: Auth.getProfile().data.username,
        },
      });

      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText" && value.length <= 280) {
      setThoughtText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <Typography variant="h4">Create a Discussion</Typography>

      {Auth.loggedIn() ? (
        <>
          <Typography
            component={"span"}
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </Typography>
          <Box
            component="form"
            className="thought-form"
            onSubmit={handleFormSubmit}
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TextField
              type="text"
              name="thoughtText"
              placeholder="Start a discussion"
              className="form-input"
              value={thoughtText}
              onChange={handleChange}
            ></TextField>
            <Button sx={{ mt: 1 }} type="submit" variant="contained">
              <FontAwesomeIcon icon={faShare} color="#6B3567" />
            </Button>
          </Box>
          {error && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">This field is required</Alert>
            </Stack>
          )}
        </>
      ) : (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            You need to be logged in to start a discussion. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </Alert>
        </Stack>
      )}
    </div>
  );
};

export default ThoughtForm;
