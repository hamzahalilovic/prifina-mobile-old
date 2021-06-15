import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";

import Auth from "@aws-amplify/auth";

import LoginScreen from "../screens/LoginScreen";
import IntroOne from "../screens/IntroOne";
import IntroTwo from "../screens/IntroTwo";
import IntroThree from "../screens/IntroThree";
import VerificationScreen from "../screens/VerificationScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // options={{
        //   headerRight: () => (
        //     <Button
        //       onPress={() => {
        //         useNavigation.navigate("Verification");
        //       }}
        //       title="Info"
        //       color="#fff"
        //     />
        //   ),
        // }}
      >
        {/* <Stack.Navigator> */}
        <Stack.Screen name="IntroOne" component={IntroOne} />
        <Stack.Screen name="IntroTwo" component={IntroTwo} />
        <Stack.Screen name="IntroThree" component={IntroThree} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
