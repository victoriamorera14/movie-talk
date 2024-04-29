import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function CarouselComponent({ image, description }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.image}>
        <Image source={image} />
      </View>
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
  },
  descriptionContainer: {
    width:375,
    height:85,
  },
  description: {
    fontSize: 15,
    fontWeight: 'normal',
  },
});
