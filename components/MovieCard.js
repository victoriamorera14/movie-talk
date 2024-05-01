import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";
import FavoriteMark from "./FavoriteMark";

export default function MovieCard({ isBigCard, title, image }) {
  return (
    <ImageBackground
      source={image}
      style={isBigCard ? styles.bigImage : styles.smallImage}
    >
      <FavoriteMark />
      <View
        style={isBigCard ? styles.bigTitleContainer : styles.smallTitleContainer}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  smallImage: {
    height: "140px",
    width: "110px",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 20,
  },
  smallTitleContainer: {
    backgroundColor: "black",
    height: "40px",
    opacity: 0.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
  },
  bigImage: {
    height: "186px",
    width: "166px",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 30,
  },
  bigTitleContainer: {
    backgroundColor: "black",
    height: "40px",
    opacity: 0.8,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
