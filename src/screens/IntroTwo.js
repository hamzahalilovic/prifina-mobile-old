import * as React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";

import Container from "../components/Container";

import introTwo from "../assets/introTwo.png";

function IntroTwo() {
  const { navigate } = useNavigation();

  return (
    <Container containerStyle={{ paddingRight: 35, paddingLeft: 35 }}>
      <Image source={introTwo} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Sync your address book
      </Text>
      <View>
        <Text style={{ marginTop: 24, textAlign: "center" }}>
          Sync your address book from your phone to the personal data cloud. Any
          changes made on your phone will also appear on the mobile app.
        </Text>
      </View>
      <Button
        title="Next"
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 190,
        }}
        onPress={() => {
          navigate("IntroThree");
        }}
        titleStyle={{
          fontSize: 12,
        }}
      />
      <View flex="fisplay" flexDirection="row" style={{ marginBottom: 52 }}>
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
            marginRight: 15,
          }}
        />
        <View
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#C3C2C2",
            borderRadius: 50,
          }}
        />
      </View>
    </Container>
  );
}

export default IntroTwo;
