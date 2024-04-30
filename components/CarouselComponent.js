import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

/*const fontLoaded = () =>  useFonts({
  "ubuntu-regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
});*/

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
    overflow: "hidden"
    //fontFamily: fontLoaded,
  },
});
