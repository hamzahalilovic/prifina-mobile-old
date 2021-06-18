import * as React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";

import Container from "../components/Container";

import introThree from "../assets/introThree.png";

function IntroThree() {
  const { navigate } = useNavigation();

  return (
    <Container containerStyle={{ paddingRight: 35, paddingLeft: 35 }}>
      <Image source={introThree} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Data hub for your mobile apps
      </Text>
      <View>
        <Text style={{ marginTop: 24, textAlign: "center" }}>
          Your authorized mobile apps on your device can read & write data to
          your personal data cloud.
        </Text>
      </View>
      <Button
        title="Get Started"
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 150,
        }}
        onPress={() => {
          navigate("Login");
        }}
        titleStyle={{
          fontSize: 12,
        }}
      />
      <View flex="fisplay" flexDirection="row" style={{ marginBottom: 72 }}>
        <View
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#C3C2C2",
            borderRadius: 50,
            marginRight: 15,
          }}
        />
        <View
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#C3C2C2",
            borderRadius: 50,
            marginRight: 15,
          }}
        />
        <View
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#00847A",
            borderRadius: 50,
          }}
        />
      </View>
    </Container>
  );
}

export default IntroThree;
