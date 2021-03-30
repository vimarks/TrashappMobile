/* @flow weak */

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 10,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    height: 200,
    width: "100%"
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  },
  title: {
    marginBottom: 7
  }
});
