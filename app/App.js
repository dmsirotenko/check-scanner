import React, { Component } from 'react';

import {
  createStackNavigator,
} from 'react-navigation';

import Home from "./screens/Home";
import Scanner from "./screens/Scanner";
import Result from "./screens/Result";

const App = createStackNavigator({
  Home: { screen: Home },
  Scanner: { screen: Scanner },
  Result: { screen: Result }
});

export default App;
