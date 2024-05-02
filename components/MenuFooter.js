import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";

export default function MenuFooter() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Image source={require("../assets/homeIcon.png")} style={styles.content} />
      </Pressable>
      <Pressable style={styles.button}>
        <Image source={require("../assets/chatIcon.png")} style={styles.content} />
      </Pressable>
      <Pressable style={styles.button}>
        <Image source={require("../assets/searcherIcon.png")} style={styles.content} />
      </Pressable>
      <Pressable style={styles.button}>
        <Image source={require("../assets/userIcon.png")} style={styles.content} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:375,
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#25222F",
  },
  button: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    padding: 10,
    margin:10,
    backgroundColor: "#25222F",
  },
  content: {
    width: 25,
    height: 25,
  },
});
