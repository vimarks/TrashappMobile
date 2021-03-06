/* @flow weak */

import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

function LoginScreen({}) {
  return (
    <Screen style={styles.container}>
      <Logo />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="email"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
