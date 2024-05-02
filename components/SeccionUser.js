import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";

export default function SeccionUser({ iconLeft, texto, containerColor }) {

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
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
  },
  text: {
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight:"bold",
    paddingLeft:20,
    paddingRight:20,
  },
  icons: {
    paddingLeft: 10
  }
});
