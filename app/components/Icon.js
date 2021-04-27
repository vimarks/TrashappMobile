/* @flow weak */

import React from "react";
import { View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  backgroundColor = "#fff",
  iconColor = "#000",
  name,
  size = 40
}) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor,
        borderRadius: size / 2,
        width: size,
        height: size
      }}
    >
      <MaterialCommunityIcons color={iconColor} name={name} size={size * 0.5} />
    </View>
  );
}

export default Icon;
