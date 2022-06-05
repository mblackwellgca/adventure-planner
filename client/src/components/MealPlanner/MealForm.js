import React, { useState } from "react";

function MealForm(props) {
  const [input, setInput] = useState("");
  let [type, setType] = useState("");

  const typeLevel = ["breakfast", "lunch", "dinner", "TBD"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!type) {
      type = "TBD";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      type: type,
    });

    setInput("");
    setType("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="meal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your meal list"
          value={input}
          name="text"
          className="meal-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${type}`}>
            {type || "Type of Meal"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setType(typeLevel[0])}>Breakfast</p>
            <p onClick={() => setType(typeLevel[1])}>Lunch</p>
            <p onClick={() => setType(typeLevel[2])}>Dinner</p>
          </div>
        </div>
        <button className="meal-button">Add meal list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="meal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="meal-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${type}`}>
            {type || "Type of Meal"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setType(typeLevel[0])}>Breakfast</p>
            <p onClick={() => setType(typeLevel[1])}>Lunch</p>
            <p onClick={() => setType(typeLevel[2])}>Dinner</p>
          </div>
        </div>
        <button className="meal-button">Update</button>
      </form>
    </div>
  );
}

export default MealForm;
