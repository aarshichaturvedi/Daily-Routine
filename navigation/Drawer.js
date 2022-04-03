import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Home from '../screens/Home';
import CreateTT from '../screens/CreateTT'
import Last from '../screens/Last';
import Login from '../screens/Login';
import Select from '../screens/Select';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Create" component={CreateTT} />
      <Drawer.Screen name="Last" component={Last} />
      <Drawer.Screen name="Select" component={Select} />
      <Drawer.Screen name="Stack" component={StackNavigator} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
