import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CarouselComponent({ image, description }) {
  return (
    <View style={styles.mainContainer}>
      <Image source={image} style={styles.image} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    padding: 20,
    width: "100%",
  },
  image: {
    width: 375,
    height: 540,
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
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
    //fontFamily: fontLoaded,
  },
});
