import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddPostScreen } from "../screens/AddPostScreen";
import { TimeLineStackNav } from "./TimeLineStackNav";
import { ProfileStackNav } from "./ProfileStackNav";
import { appColor } from "../setting/SettingColor";
const Tab = createBottomTabNavigator();

export function TabNav() {
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
          activeTintColor: appColor.subColor,
          inactiveTintColor: appColor.subColor,
          activeBackgroundColor: appColor.activeTabColor,
          inactiveBackgroundColor: appColor.tabColor,
        }}
      >
        <Tab.Screen name="TimeLine" component={TimeLineStackNav} />
        <Tab.Screen name="AddPost" component={AddPostScreen} />
        <Tab.Screen name="Profile" component={ProfileStackNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
