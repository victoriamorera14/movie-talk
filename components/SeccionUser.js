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
    padding: 7,
    //borderWidth: 1,
    borderRadius: 30,
    margin: 7,
    backgroundColor: colors.mainColors.primary,
    //borderColor: colors.mainColors.gray1,
    alignSelf: "center",
    height: "80%",
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
