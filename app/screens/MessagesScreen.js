import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/vincent.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/vincent.jpg")
  }
];
const MessagesScreen = ({}) => (
  <Screen style={styles.screen}>
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("list item pressed")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  </Screen>
);

export default MessagesScreen;

const styles = StyleSheet.create({});
