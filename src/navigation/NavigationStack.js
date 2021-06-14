import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import IntroOne from "../screens/IntroOne";
import IntroTwo from "../screens/IntroTwo";
import IntroThree from "../screens/IntroThree";
import VerificationScreen from "../screens/VerificationScreen";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
