import React, { useState } from "react";
import MealForm from "./MealForm";

function Meal(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    type: "",
    day: "",
  });

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
  return props.meal.map((item, i) => (
    // does item.day = Monday? Then add to Monday card
    <div
      className={
        item.isComplete
          ? `meal-row complete ${item.type}`
          : `meal-row ${item.type}`
      }
      key={i}
    >
      {/* {item.filter((day) => {
        return day === current;
      })} */}
      <div
        key={item.id}
        day={item.day}
        onClick={() => props.completeMealItem(item.id)}
      >
        {item.text}
        {"\n"}
        {item.type}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          style={{ cursor: "pointer" }}
          onClick={() =>
            setEdit({
              id: item.id,
              value: item.text,
              type: item.type,
              day: item.day,
            })
          }
        >
          {" "}
          ✏️
        </p>
        <p
          style={{ cursor: "pointer" }}
          onClick={() => props.removeMealItem(item.id)}
        >
          {" "}
          🗑️
        </p>
      </div>
    </div>
  ));
}

export default Meal;
