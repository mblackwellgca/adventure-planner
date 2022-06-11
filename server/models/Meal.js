const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  text: {
    type: String,
    required: "Please give your meal a name.",
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  type: {
    type: String,
  },
  day: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
});

const Meal = model('Meal', mealSchema);

module.exports = Meal;
