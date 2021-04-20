import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListingsScreen from "./app/screens/ListingsScreen";
import Icon from "./app/components/Icon";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  flex: 1
});
