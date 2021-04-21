/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <AppText style={styles.text}>{message}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  text: {
    color: defaultStyles.colors.danger
  }
});
