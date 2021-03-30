/* @flow weak */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";

const AppButton = ({ color = "primary", title, onPress }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: colors[color] }]}
    onPress={onPress}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
