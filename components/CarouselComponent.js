import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import IMAGE_PATH from "../utils/IMAGE_PATH";

export default function CarouselComponent({ image, description }) {
  const imageSource = { uri: `${IMAGE_PATH}${image}` };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={imageSource} style={styles.image} />
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
    height: 450,
    width: "100%",
    marginBottom: 15,
  },
  descriptionContainer: {
    width: '100%',
    justifyContent: "center",
    marginBottom: 15,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    overflow: "hidden",
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: "Ubuntu-Regular",
    color: "white",
  },
});
