import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TimeLineScreen } from "../screens/TimeLineScreen";
import { appColor } from "../setting/SettingColor";

const TimeLineStack = createStackNavigator();

export function TimeLineStackNav() {
  return (
    <TimeLineStack.Navigator
      screenOptions={{
        headerTintColor: appColor.subTextColor,
        headerStyle: {
          backgroundColor: appColor.mainColor,
        },
      }}
      headerMode="float"
    >
      <TimeLineStack.Screen name="TimeLineMain" component={TimeLineScreen} />
    </TimeLineStack.Navigator>
  );
}
