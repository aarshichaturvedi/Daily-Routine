import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import CreateTT from './screens/CreateTT'
import Last from './screens/Last';
import Login from './screens/Login';
import Select from './screens/Select';
import Header from './header'


const Stack  = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <View>
     <Login/>
     <Header/>
     <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateTT" component={CreateTT} />
      <Stack.Screen name="Last" component={Last} />
      <Stack.Screen name="Select" component={Select} />
      </Stack.Navigator>
      </NavigationContainer>
     
     </View>
    )
  }
}

export default App