import React from "react";
import { Card, CardContent, Typography, TextField, Fab } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: 3,
  backgroundColor: "#DDD",
});

export default function BudgetCard() {
  return (
    <CardStyled>
      <CardContent>
        <Typography variant="h4">Budget</Typography>
        <TextField id="outlined-basic" label="Add Amount" variant="outlined" />
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </CardContent>
    </CardStyled>
  );
}
