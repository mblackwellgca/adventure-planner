import React, { useEffect, useState, useRef } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  TextField,
  Fab,
} from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
const CardStyled = styled(Card)({
  display: "flex",
  justifyContent: "center",
  maxWidth: 545,
  minHeight: 345,
  padding: 2,
  margin: "0 auto",
});

export default function BudgetCard() {
  const [budget, setBudget] = useState([]);
  const budgetNameRef = useRef();
  useEffect(() => {
    console.log(budget);
    if (budget) {
      localStorage.setItem("budget", JSON.stringify(budget));
    }
  }, [budget]);
  useEffect(() => {
    const storedbudget = JSON.parse(localStorage.getItem("budget"));
    if (storedbudget) {
      setBudget(storedbudget);
    }
  }, []);

  function handleAddBudget(e) {
    const budget = budgetNameRef.current.value;
    if (budget === "") return;
    console.log(budget);
    setBudget(budget);
    budgetNameRef.current.value = null;
  }

  return (
    <CardStyled className="gradient-card budget-card">
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
          gutterBottom
        >
          Budget
        </Typography>
        <TextField
          sx={{ m: 2 }}
          inputRef={budgetNameRef}
          id="outlined-basic"
          label="Add Amount"
          variant="outlined"
          color="secondary"
        />
        <List
          sx={{ maxHeight: 100, overflow: "auto" }}
          component="div"
          className="scroll-box"
        >
          <ListItem>{budget}</ListItem>
        </List>
        <Fab
          color="primary"
          aria-label="add"
          onClick={(e) => {
            handleAddBudget(e);
          }}
        >
          <AddIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="delete"
          onClick={() => {
            setBudget("");
          }}
        >
          <DeleteIcon />
        </Fab>
      </CardContent>
    </CardStyled>
  );
}
