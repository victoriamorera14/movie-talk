import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SeccionUser({ imageLeft, texto, containerColor }) {
  const imageRight = require("../assets/arrow.png"); 

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <Image source={imageLeft} style={styles.imageLeft} />
      <Text style={styles.text}>{texto}</Text>
      <Image source={imageRight} style={styles.imageRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:250,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  imageLeft: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft:10,
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
  imageRight: {
    width: 25,
    height: 25,
  },
  
});
