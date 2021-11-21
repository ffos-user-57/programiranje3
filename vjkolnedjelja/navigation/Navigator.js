import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { About } from "../screens/About";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function MojNavigator() {
  return ( 
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "About") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "HOME",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "HOME",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "About",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "About",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
