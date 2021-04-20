/* @flow weak */

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    id: 2,
    title: "My Account",
    icon: {
      name: "email",
      backgroundColor: colors.danger
    }
  }
];

function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.user}>
        <ListItem
          title="Vincent Marks"
          subTitle="vimarks@gmail.com"
          image={require("../assets/vincent.jpg")}
        />
      </View>

      <View style={styles.options}>
        <FlatList
          data={menuItems}
          keyExtractor={option => option.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => console.log("list item pressed")}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <ListItem
        title="Log Out"
        ImageComponent={<Icon name="logout" backgroundColor={colors.medium} />}
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  user: {
    marginVertical: 20
  },
  options: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light
  }
});
