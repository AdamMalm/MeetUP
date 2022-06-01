import React from 'react'
import DetailedEventpage from "../screens/DetailedEventpage";
import Eventpage from '../screens/Eventpage';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import BottomTabNavigator from './TabNavigator'
import { RootStackParamList } from '../config/types'

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName="BottomTabNavigator"
        screenOptions={({ route, navigation }) => ({
            headerShown: false,
            gestureEnabled: true,
            ...TransitionPresets.DefaultTransition,
        })}
    >
        <Stack.Screen name="Eventpage" component={Eventpage}/>
        <Stack.Screen name="DetailedEventpage" component={DetailedEventpage}/>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
    </Stack.Navigator>
  )
}

export default StackNavigator