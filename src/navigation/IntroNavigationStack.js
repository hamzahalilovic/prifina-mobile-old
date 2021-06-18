import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import IntroOne from "../screens/IntroOne";
import IntroTwo from "../screens/IntroTwo";
import IntroThree from "../screens/IntroThree";

const Stack = createStackNavigator();

function IntroNavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Step One" component={IntroOne} />
      <Stack.Screen name="Step Two" component={IntroTwo} />
      <Stack.Screen name="Step Three" component={IntroThree} />
    </Stack.Navigator>
  );
}

export default IntroNavigationStack;
