import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Container({ children, containerStyle }) {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8F7",
    alignItems: "center",
    // justifyContent: "space-between",
  },
});

export default Container;
