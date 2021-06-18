import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
// import IntroOne from "../screens/IntroOne";
// import IntroTwo from "../screens/IntroTwo";
// import IntroThree from "../screens/IntroThree";
import VerificationScreen from "../screens/VerificationScreen";
import HomeScreen from "../screens/HomeScreen";

import IntroNavigationStack from "./IntroNavigationStack";

import IntroOne from "../screens/IntroOne";

import IntroTwo from "../screens/IntroTwo";
import IntroThree from "../screens/IntroThree";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Navigator> */}
        {/* <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} /> */}

        {/* <Stack.Screen name="Intro" component={IntroNavigationStack} />
         */}

        <Stack.Screen name="2FA" component={IntroOne} />
        <Stack.Screen name="Data Sync" component={IntroTwo} />
        <Stack.Screen name="Data Hub" component={IntroThree} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator headerMode="none">
    //     {Auth.signedIn ? (
    //       <>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //       </>
    //     ) : (
    //       <>
    //         <Stack.Screen name="IntroOne" component={IntroOne} />
    //         <Stack.Screen name="IntroTwo" component={IntroTwo} />
    //         <Stack.Screen name="IntroThree" component={IntroThree} />
    //         <Stack.Screen name="Login" component={LoginScreen} />
    //         <Stack.Screen name="Verification" component={VerificationScreen} />
    //       </>
    //     )}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default NavigationStack;
