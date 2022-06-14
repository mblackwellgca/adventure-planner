import { ListItem, Divider } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@material-ui/core";
export default function TripDetails(props) {
  console.log(props.id);
  function handleDeleteDetail(id) {
    const filtered = props.details.filter((detail, i) => {
      console.log(id);
      console.log(props.details[i].id);
      return id !== detail.id;
    });
    props.setDetails(filtered);
  }

  return (
    <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
      {props.detail}
      <IconButton onClick={() => handleDeleteDetail(props.id)}>
        <DeleteIcon />
      </IconButton>
      <Divider />
    </ListItem>
  );
}
