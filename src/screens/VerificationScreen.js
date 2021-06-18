import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import { Button } from "react-native-elements";

import Container from "../components/Container";
import ConfirmationCode from "../components/ConfirmationCode";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import email from "../assets/email.png";

function VerificationScreen({ route }) {
  const { navigate } = useNavigation();

  const CELL_COUNT = 6;

  const [authCode, setAuthCode] = useState("");

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  async function confirmSignIn() {
    const user = await Auth.confirmSignIn(route.params.username, code)
      .then((user) => {
        console.log("successful confirmation: ", user);
        setAuthCode();
        navigate("Home");
      })
      .catch((err) => {
        console.log("error confirming user: ", err);
      });
  }

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
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          paddingRight: 25,
          paddingLeft: 25,
        }}
      >
        We have sent you a verification code via SMS. Please enter the code.
      </Text>
      <View marginTop={63}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        {/* <Input onChangeText={(authCode) => setAuthCode({ authCode })} /> */}
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
        onPress={() => {
          navigate("Home");
        }}
      />
      <Button
        type="clear"
        title="Resend Code"
        titleStyle={{ color: "#00847A" }}
        onPress={resendConfirmationCode}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 31,
    height: 33,
    lineHeight: 13,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#00847A",
    textAlign: "center",
    marginRight: 25,
    borderRadius: 5,
    alignItems: "center",
    paddingTop: 10,
  },
  focusCell: {
    borderColor: "#C3C2C2",
  },
});

export default VerificationScreen;
