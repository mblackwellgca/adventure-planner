import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

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
      </CardContent>
    </CardStyled>
  );
}
