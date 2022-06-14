import { ListItem, Divider } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@material-ui/core";
export default function TripDetails({ detail, handleDelete }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid gray",
      }}
      gutterBottom
    >
      {detail}
      <IconButton>
        <DeleteIcon onClick={console.log(detail.id)} />
      </IconButton>
      <Divider />
    </ListItem>
  );
}
