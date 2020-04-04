import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TimeLineScreen } from "./screens/TimeLineScreen";
import { AddPostScreen } from "./screens/AddPostScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "TimeLine") {
              iconName = "md-home";
            } else if (route.name === "AddPost") {
              iconName = "md-paper-plane";
            } else if (route.name === "Profile") {
              iconName = "md-person";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          inactiveTintColor: "white",
          activeBackgroundColor: "#483d8b",
          inactiveBackgroundColor: "#6a5fad",
        }}
      >
        <Tab.Screen name="TimeLine" component={TimeLineScreen} />
        <Tab.Screen name="AddPost" component={AddPostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
