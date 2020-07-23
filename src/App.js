import React, { useState } from "react";
import "./App.css";
import LoginScreen from "./Screen/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersScreen from "./Screen/Users/Users.js";
import RegisterScreen from "./Screen/Register/RegisterUser";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/create-user" exact component={RegisterScreen} />
          <Route path="/users">
            <UsersScreen />
          </Route>
          <Route path="/">
            <LoginScreen />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
