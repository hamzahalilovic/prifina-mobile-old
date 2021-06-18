import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";

function Container({ children, containerStyle }) {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F8F7",
    alignItems: "center",
    paddingRight: 45,
    paddingLeft: 45,
    paddingBottom: 10,
  },
});

export default Container;
