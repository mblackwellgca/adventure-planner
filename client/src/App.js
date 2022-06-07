import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./assets/colorPalette";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SingleThought from "./pages/SingleThought";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import MealPlanning from "./pages/MealPlanning";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
require('dotenv').config();

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
const [items, setItems] = useState([  ]);
const [dataIsLoaded, setDataIsLoaded] = useState(false);
useEffect(() => {var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YzNjMjAyY2Y3ZDVhMTUzZTQ5MGU2NDgxY2I3NjlhY2E6OWQ3YjM5MDQ4MmU4YjNlMmU3NWRhNDEzMWFkOWQ3NmY=");
  
  var raw = "";
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
  };
  
  fetch("https://api.roadgoat.com/api/v2/destinations/new-york-ny-usa", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));})
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/discussions" element={<Profile />} />
                <Route path="/profiles/:username" element={<Profile />} />
                <Route path="/thoughts/:thoughtId" element={<SingleThought />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/meal-planning" element={<MealPlanning />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
