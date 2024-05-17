import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import BackButton from "./BackButton";
import { colors } from "../utils/colors";

export default function Titulo({ text, showIcon }) {

  return (
    <View style={[styles.container]}>
      {showIcon && (<BackButton/>
        // <Pressable onPress={handlePress}>
        //   <Ionicons name="chevron-back-outline" size={28} color={"white"} />{" "}
        // </Pressable>
      )}
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
    justifyContent: "center", //No consigo que el texto se centre con la linea
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  titleText: {
    color: "#E92348",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
  },
});
