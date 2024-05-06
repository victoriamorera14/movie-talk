import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MenuFooter() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Ionicons name="home" size={25} color={'white'} />
      </Pressable>
      <Pressable style={styles.button}>
        <Ionicons name="chatbox-ellipses-outline" size={25} color={'white'} />
      </Pressable>
      <Pressable style={styles.button}>
        <Ionicons name="search" size={25} color={'white'} />
      </Pressable>
      <Pressable style={styles.button}>
        <Ionicons name="person" size={25} color={'white'} />
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