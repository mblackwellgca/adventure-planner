import React, { useState } from "react";
import MealForm from "./MealForm";

function Meal(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    type: "",
  });

  console.log(props.meal);

  const submitUpdate = (value) => {
    props.editMealItem(edit.id, value);
    setEdit({ id: null, value: "", type: "" });
  };

  if (edit.id) {
    return <MealForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.meal.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `meal-row complete ${item.type}`
          : `meal-row ${item.type}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeMealItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({ id: item.id, value: item.text, type: item.type })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.removeMealItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Meal;
