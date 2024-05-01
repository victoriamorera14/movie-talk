import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function FavoriteMark() {
  return (
    <View style={styles.mainContainer}>
      <Ionicons name="bookmark" size={35} style={styles.markIcon}></Ionicons>
      <View style={styles.innerContainer}>
        <Ionicons name="heart" size={15} style={styles.heartIcon}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  innerContainer:{
    position: "absolute",
    left: 10,
    top: 6.5,
  },
  heartIcon: {
    zIndex: 99,
    color: "#E92348",
  },
  markIcon: {
    color: "black",
    opacity: .8,
  },
});
