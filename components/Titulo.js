import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Titulo({ text, showIcon }) {
  return (
    <View style={[styles.container, { backgroundColor: "#373246" }]}>
      {showIcon && <Image source={require("../assets/backIcon.png")} style={styles.icon} />}
      <View style={[styles.textContainer, showIcon && { marginLeft: 10 }]}>
        <Text style={styles.titleText}>{text}</Text>
        <View style={styles.line}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  textContainer: {
    flex: 1,
    alignContent: "center" //No consigo que el texto se centre con la linea
  },
  titleText: {
    color: "#E92348",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom:10,
  },

  line: {
    width:280,
    borderBottomWidth: 3,
    borderBottomColor: "white",
    borderRadius: 5, 
  },
  icon: {
    padding: 10,
    width: 20,
    height: 20,
  },
});
