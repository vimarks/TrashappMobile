/* @flow weak */

import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

const ListItemSeparator = () => <View style={styles.container} />;

export default ListItemSeparator;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light
  }
});
