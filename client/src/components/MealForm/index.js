import React, { useState } from "react";
import {
  CssBaseline,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  Box,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_MEAL } from "../../utils/mutations";
import Auth from "../../utils/auth";
import { QUERY_MEALS } from "../../utils/queries";

const MealForm = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [day, setDay] = useState("");
  const typeLevel = ["breakfast", "lunch", "dinner", "TBD"];

  const [addMeal] = useMutation(ADD_MEAL, {
    update(cache, { data: { addMeal } }) {
      try {
        const { meals } = cache.readQuery({ query: QUERY_MEALS });
        cache.writeQuery({
          query: QUERY_MEALS,
          data: { meals: [addMeal, ...meals] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addMeal({
        variables: {
          text,
          type,
          day,
          username: Auth.getProfile().data.username,
        },
      });
      console.log(data);
      setText("");
      setType("");
      setDay("");
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <div>
      <Typography variant="h4">Add to Your Group's Meal Plan</Typography>
      <CssBaseline />
      <Box
        component="form"
        className="meal-form"
        onSubmit={handleFormSubmit}
        noValidate
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextField
          type="text"
          placeholder="Add meal to your list"
          value={text}
          name="text"
          className="meal-input"
          onChange={handleChange}
        ></TextField>
        <h3 className={`${type}`}>{type || "Select Type of Meal"}</h3>
        <Box>
          <Button
            sx={[
              { color: "secondary.main" },
              {
                "&:focus": {
                  backgroundColor: "secondary.dark",
                  color: "secondary.contrastText",
                },
              },
            ]}
            onClick={() => setType(typeLevel[0])}
          >
            Breakfast
          </Button>
          <Button
            sx={[
              { color: "secondary.main" },
              {
                "&:focus": {
                  backgroundColor: "secondary.dark",
                  color: "secondary.contrastText",
                },
              },
            ]}
            onClick={() => setType(typeLevel[1])}
          >
            Lunch
          </Button>
          <Button
            sx={[
              { color: "secondary.main" },
              {
                "&:focus": {
                  backgroundColor: "secondary.dark",
                  color: "secondary.contrastText",
                },
              },
            ]}
            onClick={() => setType(typeLevel[2])}
          >
            Dinner
          </Button>
        </Box>

        <FormControl fullWidth>
          <InputLabel id="day-select-label">Day</InputLabel>
          <Select
            name="day"
            labelId="day-select-label"
            id="day-select"
            value={day}
            label="Day"
            onChange={handleDayChange}
          >
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" className="meal-Button">
          Add meal list item
        </Button>
      </Box>
    </div>
  );
};

export default MealForm;
