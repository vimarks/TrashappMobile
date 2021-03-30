/* @flow weak */

import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, onPress, subTitle, title }) => (
  <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  </TouchableHighlight>
);

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15
  },
  detailsContainer: {},
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10
  },
  subTitle: {
    color: colors.medium
  },
  title: {
    fontWeight: "500"
  }
});
