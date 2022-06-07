import React, { useState } from "react";
import MealForm from "./MealForm";

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
  console.log(props.meal);

  const submitUpdate = (value) => {
    props.editMealItem(edit.id, value);
    setEdit({ id: null, value: "", type: "", day: "" });
  };

  if (edit.id) {
    return <MealForm edit={edit} onSubmit={submitUpdate} />;
  }
  // let mondayMeals = props.meal.filter((m) => {
  //   m.day === "Monday";
  // });
  return (
    // does item.day = Monday? Then add to Monday card
    <div className="weekDays">
      {weekDays.map((currentDay, i) => {
        console.log(currentDay);
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
            <div>{currentDay + "-" + type + " - " + current[0].text}</div>
          ) : null;
        });
        return mealType;
      })}
    </div>
  );
}

{
  /* <div
          className={
            current.isComplete
              ? `meal-row complete ${current.type}`
              : `meal-row ${current.type}`
          }
          key={i}
        >
          <div
            key={current.id}
            day={current.day}
            onClick={() => props.completeMealItem(current.id)}
          >
            {current.text}
            {"\n"}
            {current.type}
          </div>
          <div className="icons">
            {console.log(current)}
            <p
              style={{ cursor: "pointer" }}
              onClick={() =>
                setEdit({
                  id: current.id,
                  value: current.text,
                  type: current.type,
                  day: current.day,
                })
              }
            >
              {" "}
              ✏️
            </p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => props.removeMealItem(current.id)}
            >
              {" "}
              🗑️
            </p>
          </div>
        </div>; */
}

export default Meal;
