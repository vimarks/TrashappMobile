/* @flow weak */

import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const AppText = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
);

export default AppText;

const styles = StyleSheet.create({
  text: {
    // here goes styles common to both platforms
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir"
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    })
  }
});
