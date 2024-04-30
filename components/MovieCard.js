import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { ImageBackground } from "react-native-web";

export default function MovieCard({ isBigCard, title, image }) {
  return isBigCard ? (
    <ImageBackground source={image} style={styles.bigImage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  ) : (
    <ImageBackground source={image} style={styles.smallImage}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({  
  smallImage: {
    resizeMode: "cover",
    height: "140px",
    width: "110px",
    flexDirection: 'column',
    justifyContent: "flex-end",
  },  
  bigImage: {
    height: "186px",
    width: "166px",
    flexDirection: 'column',
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: 'black',
    opacity: .8,
  },
  title: {
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
    overflow: "hidden",
    paddingTop: "5px",
    paddingHorizontal: "8px",
  },
});
