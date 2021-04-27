import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, View, Image } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import Icon from "./app/components/Icon";
export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  flex: 1
});
