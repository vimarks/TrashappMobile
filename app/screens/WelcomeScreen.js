/* @flow weak */

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

const WelcomeScreen = ({}) => (
  <ImageBackground
    blurRadius={-5}
    source={require("../assets/loginBackground.jpg")}
    style={styles.container}
  >
    <View style={styles.logoContainer}>
      <View style={styles.logo}>
        <Text style={{ fontSize: 58, fontWeight: "bold" }}>trash</Text>
        <Text style={{ fontSize: 29, fontWeight: "bold", marginBottom: 6 }}>
          app
        </Text>
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: "bold",
          marginLeft: 5,
          marginTop: -8
        }}
      >
        Be part of a cleaner world
      </Text>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="LOGIN" />
      <AppButton title="SIGN UP" color="secondary" />
    </View>
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
  },

  logo: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  logoContainer: {
    position: "absolute",
    top: 50
  }
});
