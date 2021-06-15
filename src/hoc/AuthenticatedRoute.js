// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// import { isUserLoggedIn as isUserLoggedInImport } from "../services/user";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import LoginScreen from "../screens/LoginScreen";
// import IntroOne from "../screens/IntroOne";
// import IntroTwo from "../screens/IntroTwo";
// import IntroThree from "../screens/IntroThree";
// import VerificationScreen from "../screens/VerificationScreen";

// // interface Props extends RouteProps {}

// const AuthenticatedRoute = ({ component, ...rest }) => (
//   <NavigationContainer>
//     <Stack.Navigator headerMode="none">
//       {...rest}
//       {() =>
//         !isUserLoggedInImport() ? (
//           <Stack.Screen name="Login" component={LoginScreen} />
//         ) : (
//           <Stack.Screen name="Verification" component={VerificationScreen} />
//         )
//       }
//     </Stack.Navigator>
//   </NavigationContainer>
// );

// export default AuthenticatedRoute;
