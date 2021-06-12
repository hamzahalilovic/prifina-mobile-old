import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Container from "./src/components/Container";
import NavigationStack from "./src/navigation/NavigationStack";

export default function App() {
  return (
    <>
      <NavigationStack>
        <StatusBar style="auto" />
      </NavigationStack>
    </>
  );
}
