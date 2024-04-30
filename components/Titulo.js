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
    padding: 10,
    margin:10
  },
  textContainer: {
    flex: 1,
    alignContent: "left",
    justifyContent: "center" //No consigo que el texto se centre con la linea
  },
  titleText: {
    color: "#E92348",
    fontSize: 20,
    fontWeight: "bold",
  },

  line: {
    position: "absolute",
    top: "30px",
    width:280,
    borderBottomWidth: 2,
    borderBottomColor: "white",
    borderRadius: 5, 
  },
  icon: {
    height: "20px",
    padding: 10,
    width: "5%",
  },
});
