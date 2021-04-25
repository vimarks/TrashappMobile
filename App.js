import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  flex: 1
});
