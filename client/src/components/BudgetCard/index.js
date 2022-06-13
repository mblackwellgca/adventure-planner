import React, { useEffect, useState, useRef } from "react";
import BudgetDetails from "../BudgetDetails";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardContent,
  List,
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
    if (budget.length > 0) {
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
    setBudget((prevBudget) => {
      return [...prevBudget, { id: uuidv4(), budget: budget }];
    });
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
          {budget.map((budget) => {
            return <BudgetDetails key={uuidv4()} budget={budget.budget} />;
          })}
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
      </CardContent>
    </CardStyled>
  );
}
