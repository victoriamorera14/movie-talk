import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { colors } from "../utils/colors";

export default function Titulo({ text, showIcon }) {
  return (
    <View style={[styles.container]}>
      {showIcon && <BackButton />}
      <View style={[styles.textContainer, showIcon && { marginLeft: 10 }]}>
        <Text style={styles.titleText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    width: "auto",
    backgroundColor: colors.mainColors.primary,
  },
  textContainer: {
    flex: 1,
    alignContent: "left",
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  titleText: {
    fontFamily: "Ubuntu-Bold",
    color: "#E92348",
    fontSize: 20,
    paddingBottom: 8,
  },
});
