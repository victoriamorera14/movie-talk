import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export default function SeccionUser({ iconLeft, texto}) {

  return (
    <View style={[styles.container]}>
      <Ionicons name={iconLeft} size={28} color={'white'} style={styles.icons} />
      <Text style={styles.text}>{texto}</Text>
      <Ionicons name="chevron-forward-outline" size={28} color={'white'} style={styles.icons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:260,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: colors.mainColors.primary,
  },
  text: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Ubuntu-Bold",
    paddingLeft:20,
    paddingRight:20,
  },
  icons: {
    paddingLeft: 10
  }
});
