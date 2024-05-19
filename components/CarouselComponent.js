import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";

export default function CarouselComponent({ image, description }) {
  const imageSource = `http://image.tmdb.org/t/p/w500/${image}`;

  return (
    <View style={styles.mainContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.mainColors.primary,
  },
  image: {
    width: 375,
    height: 540,
  },
  descriptionContainer: {
    width: 375,
    height: 70,
    justifyContent: "center",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    overflow: "hidden",
    paddingTop: "5px",
    paddingHorizontal: "8px",
    fontFamily: "Ubuntu-Regular",
    color: "white",
  },
});
