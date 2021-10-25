import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";


const Stack = createStackNavigator();

export function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{title: "Home Screen"}}
            />
            <Stack.Screen 
            name="Settings"
            components={SettingsScreen}
            options={{title:"Settings Screen"}}
            />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{headerTitle:"HOME"}}
                />
                <Tab.Screen 
                name="Settings"
                component={SettingsScreen}
                options={{headerTitle:"SETTINGS"}}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}









