import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LogBox } from "react-native";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import Container from "./src/components/Container";
import NavigationStack from "./src/navigation/NavigationStack";

Amplify.configure(awsconfig);

export default function App() {
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs();
  return (
    <>
      <NavigationStack>
        <StatusBar style="auto" />
      </NavigationStack>
    </>
  );
}
