import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Home from '../screens/Home';
import Create from '../screens/Create'
import Last from '../screens/Last';
import Login from '../screens/Login';
import Select from '../screens/Select';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Last" component={Last} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Select" component={Select} />

    </Stack.Navigator>
  );
}