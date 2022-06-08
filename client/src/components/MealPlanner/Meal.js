import React, { useState } from "react";
import MealForm from "./MealForm";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Auth from "../../utils/auth";
import CardActions from "@mui/material/CardActions";

function Meal(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    type: "",
    day: "",
  });
  const types = ["breakfast", "lunch", "dinner", "TBD"];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // meal array of objects
  // console.log(props.meal);

  const submitUpdate = (value) => {
    props.editMealItem(edit.id, value);
    setEdit({ id: null, value: "", type: "", day: "" });
  };

  if (edit.id) {
    return <MealForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <div className="weekDays">
      {weekDays.map((currentDay, i) => {
        // console.log(currentDay);
        let mealType = types.map((type) => {
          let current = props.meal.filter((item) => {
            return (
              item.day === currentDay &&
              item.type === type &&
              currentDay === props.day
            );
          });
          return current.length > 0 &&
            current[0].type === type &&
            currentDay === props.day ? (
            <>
              <ListItem alignItems="flex-start">
                {" "}
                <ListItemAvatar>
                  <Avatar
                    day={current[0].day}
                    alt={Auth.getProfile().data.username}
                    sx={{ bgcolor: "secondary" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <div
                      className={
                        current.isComplete
                          ? `meal-row complete ${current[0].type}`
                          : `meal-row ${current[0].type}`
                      }
                    >
                      <div
                        key={current[0].id}
                        day={current[0].day}
                        onClick={() => props.completeMealItem(current[0].id)}
                      >
                        {`${type} - ${current[0].text}`}
                      </div>
                      <CardActions>
                        {console.log(current[0])}
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setEdit({
                              id: current[0].id,
                              value: current[0].text,
                              type: current[0].type,
                              day: current[0].day,
                            })
                          }
                        >
                          {" "}
                          ✏️
                        </span>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => props.removeMealItem(current[0].id)}
                        >
                          {" "}
                          🗑️
                        </span>
                      </CardActions>
                    </div>
                  }
                />
              </ListItem>
            </>
          ) : null;
        });
        return mealType;
      })}
    </div>
  );
}

export default Meal;
