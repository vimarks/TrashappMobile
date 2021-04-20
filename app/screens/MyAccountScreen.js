/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyAccountScreen = ({}) => (
  <View style={styles.container}>
    <Text>I'm MyAccountScreen</Text>
  </View>
);

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
