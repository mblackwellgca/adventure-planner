import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Auth from "../../utils/auth";
import Typography from "@mui/material/Typography";

const CommentForm = ({ thoughtId }) => {
  const [commentText, setCommentText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <Typography component={"h3"}>Care to comment?</Typography>

      {Auth.loggedIn() ? (
        <>
          <h3
            className={` ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="error">This field is required</Alert>
              </Stack>
            )}
          </h3>
          <Box
            component="form"
            className="comment-form"
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
              name="commentText"
              placeholder="Add your comment"
              className="form-input"
              value={commentText}
              onChange={handleChange}
            ></TextField>
            <Button
              sx={{ mt: 1 }}
              type="submit"
              onClick={() => {
                console.log(`submitted ${commentText}`);
              }}
              variant="contained"
            >
              Add comment
            </Button>
          </Box>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
