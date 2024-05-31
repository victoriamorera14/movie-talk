import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";
import React from "react";

const { width: screenWidth } = Dimensions.get("window");

export default function UserCard({ title, image, userHeight, userWidth }) {
  return (
    <View style={{ height: userHeight || screenWidth * 0.5, width: userWidth || screenWidth * 0.9 }}>
      <ImageBackground source={image} style={styles.smallImage}>
        {title && (
          <View style={styles.smallTitleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  smallImage: {
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 15,
    overflow: "hidden",
    margin: 10,
  },
  smallTitleContainer: {
    backgroundColor: "black",
    height: 40,
    opacity: 0.8,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    color: "white",
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 2.5,
  },
});
