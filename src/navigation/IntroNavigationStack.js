import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import IntroOne from "../screens/IntroOne";
import IntroTwo from "../screens/IntroTwo";
import IntroThree from "../screens/IntroThree";

const Stack = createStackNavigator();

function IntroNavigationStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="2FA" component={IntroOne} />
      <Stack.Screen name="Data Sync" component={IntroTwo} />
      <Stack.Screen name="Data Hub" component={IntroThree} />
    </Stack.Navigator>
  );
}

export default IntroNavigationStack;
