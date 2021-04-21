/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Logo = ({}) => (
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
);

export default Logo;

const styles = StyleSheet.create({
  logo: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  logoContainer: {
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center"
  }
});
