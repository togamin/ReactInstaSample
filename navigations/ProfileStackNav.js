import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens/ProfileScreen";
import { appColor } from "../setting/SettingColor";

const ProfileStack = createStackNavigator();

export function ProfileStackNav() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTintColor: appColor.subColor,
        headerStyle: {
          backgroundColor: appColor.headerColor,
        },
      }}
      headerMode="float"
    >
      <ProfileStack.Screen name="ProfileStackMain" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
