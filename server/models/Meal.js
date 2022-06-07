const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  mealText: {
    type: String,
    required: "Please  give your meal a name.",
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  mealType: {
    type: String,
  },
  mealDay: {
    type: String,
  },
  mealAuthor: {
    type: String,
    required: true,
    trim: true,
  },
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
