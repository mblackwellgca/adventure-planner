import { ListItem } from "@mui/material";
import React from "react";

export default function BudgetDetails({ budget }) {
  return <ListItem gutterBottom>{budget}</ListItem>;
}
