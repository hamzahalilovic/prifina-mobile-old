import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import { useNavigation } from "@react-navigation/native";

import { Auth } from "aws-amplify";

import { Button, Input } from "react-native-elements";

import Container from "../components/Container";

import login from "../assets/login.png";
import profile from "../assets/profile.png";
import lock from "../assets/lock.png";

function LoginScreen() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const header = () =>
  //   Auth.isUserLoggedIn() ? <Text>Logged in</Text> : <Text>Not logged in</Text>;
  const { navigate } = useNavigation();

  // async function signIn() {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //   } catch (error) {
  //     console.log("error signing in", error);
  //   }
  // }

  // async function signIn(username, password) {
  //   try {
  //     const user = await Auth.signIn(username, password);
  //     // .then((user) =>
  //     //   navigate("Home")
  //     // );

  //     console.log("success");
  //     console.log(user);
  //   } catch (error) {
  //     setError(error);
  //     console.log("error signing in", error);
  //   }
  // }

  async function signIn(username, password, newPassword) {
    const user = await Auth.signIn(username, password, newPassword)
      .then((user) => {
        if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
          const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
          Auth.completeNewPassword(
            user, // the Cognito User Object
            (newPassword = "12345678") // the new password
            // OPTIONAL, the required attributes
          )
            .then((user) => {
              // at this time the user is logged in if no MFA required
              console.log(user);
            })
            .catch((e) => {
              console.log(e);
            });
        } else if (user.challengeName == "SMS_MFA") {
          navigate("Verification", { user });
        } else {
          // other situations
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // signInAmazonCognito(){
  //   Auth.signIn(this.state.email, this.state.password)
  //     .then(res => {
  //       console.log(res);
  //       if (res.challengeName == "SMS_MFA"){
  //         this.props.navigation.navigate('LoginMFA', { user:res });
  //       }
  //       else {
  //         this.props.navigation.navigate('Account');
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  async function resendConfirmationCode(username, code) {
    try {
      await Auth.resendConfirmationCode(username, code);
      console.log("code resent successfully", code);
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username required"),
    password: Yup.string().required("Password required"),
  });
  return (
    <Container>
      <Image source={login} style={{ marginBottom: 30, marginTop: 150 }} />
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Welcome to your personal data cloud
      </Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          signIn(values);
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View marginTop={63}>
            <Input
              name="username"
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
              // onBlur={() => setFieldTouched("username")}
              // onChangeText={handleChange("username")}
              autoCapitalize="none"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <Text>{error.message}</Text>

            <Input
              name="password"
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
              autoCapitalize="none"
              secureTextEntry
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button
              title="Login"
              // onPress={() => {
              //   navigate("Verification");
              // }}
              onPress={handleSubmit}
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
              containerStyle={{ alignSelf: "center" }}
            />
            {/* <Button
              title="Login"
              // onPress={() => {
              //   navigate("Verification");
              // }}
              onPress={resendSignUp}
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
              containerStyle={{ alignSelf: "center" }}
            /> */}
          </View>
        )}
      </Formik>
    </Container>
  );
}

export default LoginScreen;
