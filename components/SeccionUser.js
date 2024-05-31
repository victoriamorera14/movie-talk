import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../utils/colors";

const { width } = Dimensions.get("window");

export default function SeccionUser({ iconLeft, texto }) {
  return (
    <View style={styles.container}>
      <Ionicons name={iconLeft} size={28} color="white" style={styles.icons} />
      <Text style={styles.text}>{texto}</Text>
      <Ionicons name="chevron-forward-outline" size={28} color="white" style={styles.icons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: colors.mainColors.primary,
    alignSelf: "center",
  },
  text: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Ubuntu-Bold",
    paddingHorizontal: 10,
  },
  icons: {
    marginHorizontal: width * 0.05,
  },
});
