import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import { Button, Input, Icon } from "react-native-elements";

import Container from "../components/Container";
import ConfirmationCode from "../components/ConfirmationCode";

import email from "../assets/email.png";

function VerificationScreen({ route }) {
  const { navigate } = useNavigation();

  // const [authCode, setAuthCode] = useState("");

  // async function confirmSignIn() {
  //   const user = await Auth.confirmSignIn(route.params.username, code)
  //     .then((user) => {
  //       console.log("successful confirmation: ", user);
  //       // this.setState({ authCode: "" });
  //       navigate("Home");
  //     })
  //     .catch((err) => {
  //       console.log("error confirming user: ", err);
  //     });
  // }
  // function confirmSignIn({ user, code, mfaType }) {
  //   return Auth.confirmSignIn(user, code, mfaType);
  // }

  function confirmLogin({ cognitoUser, code }, history) {
    return function (dispatch) {
      console.log("actions.confirmLogin(): cognitoUSer, code:", {
        cognitoUser,
        code,
      });

      // confirmSignIn (cognito)
      Auth.confirmSignIn(cognitoUser, code)
        .then((data) => {
          console.log(
            "actions.confirmLogin():Auth.confirmSignIn() data: ",
            data
          );

          // dispatch AUTH_USER

          // we have authenticated, lets navigate to /main route
          history.push("/");
        })
        .catch((err) => {
          console.error(
            "actions.confirmLogin():Auth.confirmSignIn() err:",
            err
          );
          // error -- invoke authError which dispatches AUTH_ERROR
        });
    };
  }
  console.log(confirmLogin);

  async function resendConfirmationCode() {
    const user = await Auth.resendSignUp(route.params.username)
      .then((user) => {
        // at this time the user is logged in if no MFA required
        console.log(route.params.username);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <Container containerStyle={{ paddingRight: 35, paddingLeft: 35 }}>
      <Image source={email} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        We have sent you a verification code via SMS. Please enter the code.
      </Text>
      <View marginTop={63}>
        {/* <ConfirmationCode onValueChange={confirmSignIn} /> */}
        <Input onChangeText={(authCode) => setAuthCode({ authCode })} />
      </View>
      <Button
        title="Confirm"
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 31,
        }}
        titleStyle={{
          fontSize: 12,
        }}
        // onPress={confirmSignIn}
      />
      <Button
        title="Resend Code"
        onPress={resendConfirmationCode}
        buttonStyle={{
          backgroundColor: "#00847A",
          width: 134,
          height: 35,
          marginBottom: 24,
          marginTop: 31,
        }}
        titleStyle={{
          fontSize: 12,
        }}
      />
    </Container>
  );
}

export default VerificationScreen;
