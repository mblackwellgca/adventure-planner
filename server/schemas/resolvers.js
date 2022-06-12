const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Trip, Meal } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate(["thoughts", "meals"]);
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    meals: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Meal.find(params);
    },
    meal: async (parent, { mealId }) => {
      const params = username ? { username } : {};
      return Meal.findOne({ _id: mealId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, { thoughtId, commentText }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addMeal: async (parent, { text, type, day }, context) => {
      if (context.user) {
        console.log(context.user);
        const meal = await Meal.create({
          text,
          type,
          day,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { meals: meal._id } }
        );

        return meal;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeMeal: async (parent, { mealId }, context) => {
      if (context.user) {
        const meal = await Meal.findOneAndDelete({
          _id: mealId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { meals: meal._id } }
        );

        return meal;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addTrip: async (parent, { tripName }, context) => {
      if (context.user) {
        const trip = await Trip.create({
          tripName,
          attendee: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip._id } }
        );

        return trip;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeTrip: async (parent, { tripId }, context) => {
      if (context.user) {
        const trip = await Trip.findOneAndDelete({
          _id: tripId,
          tripAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { trips: trip._id } }
        );

        return trip;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
