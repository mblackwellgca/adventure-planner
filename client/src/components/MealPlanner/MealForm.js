import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useMutation } from "@apollo/client";

import { ADD_MEAL } from "../../utils/mutations";
import { QUERY_MEALS } from "../../utils/queries";
import Auth from "../../utils/auth";

function MealForm(props) {
  const [text, setText] = useState("");
  let [type, setType] = useState("");
  let [day, setDay] = useState("");

  const typeLevel = ["breakfast", "lunch", "dinner", "TBD"];

  const [addMeal, { error }] = useMutation(ADD_MEAL, {
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!type) {
      type = "TBD";
    }

    try {
      const { data } = await addMeal({
        variables: {
          text,
          type,
          day,
          author: Auth.getProfile().data.username,
        },
      });

      setText("");
      setType("");
      setDay("");
    } catch (err) {
      console.error(err);
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: text,
      type: type,
      day: day,
    });

    setText("");
    setType("");
    setDay("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="form"
        className="meal-form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        {/* <form className="meal-form" onSubmit={handleSubmit}> */}
        <TextField
          type="text"
          placeholder="Add meal to your list"
          value={text}
          name="text"
          className="meal-input"
          onChange={handleChange}
        ></TextField>
        <div className="dropdown">
          <h3 className={`dropbtn ${type}`}>{type || "Type of Meal"}</h3>
          <div className="dropdown-content">
            <Button color="secondary" onClick={() => setType(typeLevel[0])}>
              Breakfast
            </Button>
            <Button color="secondary" onClick={() => setType(typeLevel[1])}>
              Lunch
            </Button>
            <Button color="secondary" onClick={() => setType(typeLevel[2])}>
              Dinner
            </Button>
          </div>
        </div>
        <FormControl fullWidth>
          <InputLabel id="day-select-label">Day</InputLabel>
          <Select
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
    </Container>
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        component="form"
        className="meal-form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <h3>Update entry: {props.edit.value}</h3>

        <TextField
          type="text"
          placeholder={props.edit.value}
          value={text}
          name="text"
          className="meal-input"
          onChange={handleChange}
        ></TextField>
        <div className="dropdown">
          <h4 className={`dropbtn ${type}`}>{type || "Type of Meal"}</h4>
          <div className="dropdown-content">
            <Button color="secondary" onClick={() => setType(typeLevel[0])}>
              Breakfast
            </Button>
            <Button color="secondary" onClick={() => setType(typeLevel[1])}>
              Lunch
            </Button>
            <Button color="secondary" onClick={() => setType(typeLevel[2])}>
              Dinner
            </Button>
          </div>
        </div>
        <FormControl fullWidth>
          <InputLabel id="day-select-label">Day</InputLabel>
          <Select
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
        <Button variant="contained" type="submit" className="meal-button">
          Update
        </Button>
      </Box>
    </Container>
  );
}

export default MealForm;
