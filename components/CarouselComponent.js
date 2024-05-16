import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CarouselComponent({ image, description }) {

  console.log(image);

  return (
    <View style={styles.mainContainer}>
      <Image source={`http://image.tmdb.org/t/p/w500/${image}`} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    width: "100%",
  },
  image: {
    width: 375,
    height: 540,
  },
  descriptionContainer: {
    width: 375,
    height: 85,
    justifyContent: "center",
  },
  description: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    overflow: "hidden",
    paddingTop: '5px',
    paddingHorizontal: '8px',
  },
});
