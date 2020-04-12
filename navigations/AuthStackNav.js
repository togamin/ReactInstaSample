import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { appColor } from "../setting/SettingColor";

const AuthStack = createStackNavigator();

export function AuthStackNav() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{
          headerTintColor: appColor.subTextColor,
          headerStyle: {
            backgroundColor: appColor.mainColor,
          },
        }}
        headerMode="float"
      >
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
