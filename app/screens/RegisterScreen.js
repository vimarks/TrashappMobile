/* @flow weak */
import { StyleSheet } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name"),
  email: Yup.string()
    .required()
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(4)
    .label("Password")
});

const RegisterScreen = ({}) => (
  <Screen style={styles.container}>
    <AppForm
      initialValues={{ email: "", name: "", password: "" }}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormField
        autoCapitalize="none"
        autoCorrect={false}
        icon="user"
        name="name"
        placeholder="Name"
        textContentType="emailAddress"
      />

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
      <SubmitButton title="Register" />
    </AppForm>
  </Screen>
);

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15
  }
});
