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
      <h3 style={{ borderBottom: "1px dotted #1a1a1a" }}>Comments</h3>
      <Card sx={{ p: 2, mt: 3, boxShadow: 1 }}>
        <CardContent>
          {comments &&
            comments.map((comment) => (
              <div key={comment._id} className="col-12 mb-3 pb-3">
                <Box sx={{ p: 2, mt: 3, boxShadow: 1 }}>
                  <Typography variant="h4">
                    {comment.commentAuthor} commented{" "}
                    <span style={{ fontSize: "0.825rem" }}>
                      on {comment.createdAt}
                    </span>
                  </Typography>
                  <p className="card-body">{comment.commentText}</p>
                </Box>
              </div>
            ))}
        </CardContent>
      </Card>
    </>
  );
};

export default CommentList;
