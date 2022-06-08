const db = require("../config/connection");
const { User, Thought, Meal } = require("../models");
const userSeeds = require("./userSeeds.json");
const thoughtSeeds = require("./thoughtSeeds.json");
const mealSeeds = require("./mealSeeds.json");

db.once("open", async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});
    await Meal.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
    for (let i = 0; i < mealSeeds.length; i++) {
      const { _id, author } = await Meal.create(mealSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: author },
        {
          $addToSet: {
            meals: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
