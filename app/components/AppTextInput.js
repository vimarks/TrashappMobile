/* @flow weak */

import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => (
  <View style={[styles.container, { width }]}>
    {icon && (
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
    )}
    <TextInput
      placeholderTextColor={defaultStyles.colors.medium}
      style={defaultStyles.text}
      {...otherProps}
    />
  </View>
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 24,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center"
  },
  icon: {
    marginRight: 10
  }
});
