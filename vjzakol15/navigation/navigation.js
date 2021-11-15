import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SecondScreen } from "../screens/SecondScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home screen" }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ title: "SecondScreen" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "SecondScreen") {
              iconName = focused ? "SecondScreen" : "settings-outline";
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
          component={HomeScreen}
          options={{
            headerTitle: "Rezultati",
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
          name="SecondScreen"
          component={SecondScreen}
          options={{
            headerTitle: "SecondScreen",
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
            title: "SecondScreen",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}