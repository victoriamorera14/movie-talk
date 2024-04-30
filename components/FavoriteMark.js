import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function FavoriteMark() {
  return (
    <View style={styles.mainContainer}>
      <Ionicons
        name="bookmark"
        size={25}
        style={styles.mainContainer}
      />
      <Ionicons name="heart" size={15} style={styles.heartIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  heartIcon: {
    zIndex: 99,
    color: "#E92348",
  },
  markIcon: {
    color: "black",
  },
});
