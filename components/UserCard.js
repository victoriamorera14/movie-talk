import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

export default function UserCard({title, image }) {
  return (
    <ImageBackground
      source={image}
      style={styles.smallImage}
    >
      <View
        style={ styles.smallTitleContainer}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  smallImage: {
    height: "120px",
    width: "120px",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 15,
    overflow: "hidden",
    margin: 10
  },
  smallTitleContainer: {
    backgroundColor: "black",
    height: "40px",
    opacity: 0.8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 2.5,
  },
});