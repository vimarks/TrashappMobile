import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  flex: 1
});
