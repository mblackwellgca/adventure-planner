import React from "react";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Fab,
} from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: "0 auto",
  backgroundColor: "#DDD",
});

export default function TripCard() {
  return (
    <CardStyled className="gradient-card">
      <CardContent>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "32px",
            fontWeight: 500,
            textAlign: "center",
            textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
          }}
          variant="h4"
        >
          Trip Details
        </Typography>
        <TextField id="outlined-basic" label="Add Details" variant="outlined" />
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </CardContent>
    </CardStyled>
  );
}
