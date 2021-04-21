import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "furniture", value: 1 },
  { label: "instruments", value: 2 },
  { label: "cars", value: 3 }
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        placeholder="categories"
        icon="apps"
        items={categories}
      />
      <AppTextInput icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: 1
});
