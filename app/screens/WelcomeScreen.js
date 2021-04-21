/* @flow weak */

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Logo from "../components/Logo";

const WelcomeScreen = ({}) => (
  <ImageBackground
    blurRadius={-5}
    source={require("../assets/loginBackground.jpg")}
    style={styles.container}
  >
    <Logo />
  </ImageBackground>
);

export default WelcomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    width: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
