const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

// RoadGoat API
const net = require('follow-redirects').https;
const fs = require('fs');
const auth_key = Buffer.from('access_key:secret_key').toString('base64');
const options = {
  'method': 'GET',
  'hostname': 'api.roadgoat.com',
  'port': 80,
  'path': '/api/v2/destinations/auto_complete?q=barcelona',
  'headers': {
    'Authorization': `Basic ${auth_key}`
  },
  'maxRedirects': 20
};
const req = net.request(options, function (res) {
  const chunks = [];
  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  res.on("end", function (chunk) {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
  res.on("error", function (error) {
    console.error(error);
  });
});
req.end();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
