/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './components/pages/Home/Home';
import HomeTwoScreen from './components/pages/Home/Hometwo';

const Stack= createNativeStackNavigator();
const App = () =>{
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component ={HomeScreen}/>
      <Stack.Screen name="Hometwo" component ={HomeTwoScreen}/>

      </Stack.Navigator>
);
  
}

const styles = StyleSheet.create({
});

export default App;
