import * as React from "react";
import { View, Text, Image } from "react-native";

import { Button, Input, Icon } from "react-native-elements";

import Container from "../components/Container";

import email from "../assets/email.png";
import profile from "../assets/profile.png";
import lock from "../assets/lock.png";

function VerificationScreen() {
  return (
    <Container containerStyle={{ paddingRight: 35, paddingLeft: 35 }}>
      <Image source={email} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        We have sent you a verification code via SMS. Please enter the code.
      </Text>
      <View marginTop={63}>
        <Input
          placeholder="Username"
          leftIcon={<Image source={profile} />}
          containerStyle={{ alignItems: "center" }}
          inputContainerStyle={{
            borderWidth: 1.4,
            borderRadius: 5,
            width: 216,
            height: 33,
            paddingLeft: 11,
            borderColor: "#00847A",
          }}
          inputStyle={{
            // textAlign: "center",
            paddingLeft: 45,
            fontSize: 14,
          }}
        />
        <Input
          placeholder="Password"
          leftIcon={<Image source={lock} />}
          containerStyle={{ alignItems: "center" }}
          inputContainerStyle={{
            borderWidth: 1.4,
            borderRadius: 5,
            width: 216,
            height: 33,
            paddingLeft: 11,
            borderColor: "#00847A",
          }}
          inputStyle={{
            // textAlign: "center",
            paddingLeft: 45,
            fontSize: 14,
          }}
        />
      </View>
      <Button
        title="Confrim"
        onPress={() => {
          navigate("IntroTwo");
        }}
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 34,
        }}
        titleStyle={{
          fontSize: 12,
        }}
      />
      <Button
        title="Resend code"
        onPress={() => {
          navigate("IntroTwo");
        }}
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 34,
        }}
        titleStyle={{
          fontSize: 12,
        }}
      />
    </Container>
  );
}

export default VerificationScreen;
