/* @flow weak */

import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ subTitle, title }) => (
  <View style={styles.container}>
    <Image source={require("../assets/trash.jpg")} style={styles.image} />
    <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.price}>{subTitle}</AppText>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/vincent.jpg")}
          title="Vincent Marks"
          subTitle="5 Listings"
        />
      </View>
    </View>
  </View>
);

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  container: {},
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  price: {
    color: "green",
    fontWeight: "bold",
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  userContainer: {
    marginVertical: 50
  }
});
