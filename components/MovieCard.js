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
      <View
        style={
          isBigCard ? styles.bigFavMarkContainer : styles.smallFavMarkContainer
        }
      >
        <FavoriteMark />
      </View>
      <View
        style={
          isBigCard ? styles.bigTitleContainer : styles.smallTitleContainer
        }
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
  smallFavMarkContainer: {
    position: "absolute",
    left: 70,
    top: -4,
  },
  bigImage: {
    height: "186px",
    width: "166px",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
    margin: 10
  },
  bigTitleContainer: {
    backgroundColor: "black",
    height: "40px",
    opacity: 0.8,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
  },
  bigFavMarkContainer: {
    position: "absolute",
    left: 120,
    top: -4,
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
