/* @flow weak */

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const cards = [
  {
    id: 1,
    title: "Trash under bridge",
    price: 20,
    image: require("../assets/trash.jpg")
  },
  {
    id: 2,
    title: "Trash over bridge",
    price: 10,
    image: require("../assets/trash.jpg")
  }
];

const ListingsScreen = ({}) => (
  <Screen style={styles.screen}>
    <FlatList
      data={cards}
      keyExtractor={card => card.id.toString()}
      renderItem={({ item }) => {
        return (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        );
      }}
    />
  </Screen>
);

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});
