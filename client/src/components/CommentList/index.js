import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <Box sx={{ py: 2, my: 3, width: "100%" }}>
        <Typography variant={"h5"}>Comments</Typography>
        {comments &&
          comments.map((comment) => (
            <div key={comment._id}>
              <Box sx={{ p: 2, boxShadow: 1 }}>
                <Typography variant="h6" className="card-body">
                  {comment.commentText}
                </Typography>
                <Typography variant="span">
                  {comment.commentAuthor}{" "}
                  <span style={{ fontSize: "0.825rem" }}>
                    {comment.createdAt}
                  </span>
                </Typography>
              </Box>
            </div>
          ))}
      </Box>
    </>
  );
};

export default CommentList;
