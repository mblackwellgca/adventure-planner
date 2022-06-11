const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Trip {
    _id: ID
    tripName: String
    locationName: String
    tripDates: String
    attendee: [User]!
  }

  type Meal {
    _id: ID
    text: String
    type: String
    day: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    meals(username: String): [Meal]
    meal(mealId: ID!): Meal
    me: User
    trips: [Trip]
    trip(tripId: ID!): Trip
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
    addMeal(text: String!, type: String!, day: String!): Meal
    removeMeal(mealId: ID!): Meal
    addTrip(tripName: String!): Trip
    removeTrip(tripId: ID!): Trip
  }
`;

module.exports = typeDefs;
