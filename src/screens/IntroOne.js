import * as React from "react";
import { View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native-elements";

import Container from "../components/Container";

import introOne from "../assets/introOne.png";
import { NavigationStack } from "../navigation/NavigationStack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, navigate } from "@react-navigation/stack";

function IntroOne() {
  const { navigate } = useNavigation();

  return (
    <Container containerStyle={{ paddingRight: 45, paddingLeft: 45 }}>
      <Image source={introOne} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Use two-factor authentication
      </Text>
      <View>
        <Text
          style={{
            marginTop: 24,
            textAlign: "center",
            paddingRight: 45,
            paddingLeft: 45,
          }}
        >
          Verify your login in the personal data cloud mobile app using the
          two-factor authentication method; to strengthen the security of your
          account.
        </Text>
      </View>
      <Button
        title="Next"
        onPress={() => {
          navigate("IntroTwo");
        }}
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 190,
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

export default IntroOne;
