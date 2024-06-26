import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import FavoriteMark from "./FavoriteMark";
import { useNavigation } from "@react-navigation/native";
import IMAGE_PATH from "../utils/IMAGE_PATH";

export default function MovieCard({ isBigCard, title, image, movieId }) {
  const imageSource = { uri: `${IMAGE_PATH}${image}` };
  const [pressed, setPressed] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Detail", { movieId: movieId });
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ImageBackground
        source={imageSource}
        style={[
          isBigCard ? styles.bigImage : styles.smallImage,
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            isBigCard
              ? styles.bigFavMarkContainer
              : styles.smallFavMarkContainer,
          ]}
        >
          <FavoriteMark movieId={movieId} />
        </View>
        <View
          style={
            isBigCard ? styles.bigTitleContainer : styles.smallTitleContainer
          }
        >
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  smallImage: {
    height: 140, 
    width: 110, 
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
  smallFavMarkContainer: {
    position: "absolute",
    left: 70,
    top: -4,
  },
  bigImage: {
    height: 186, 
    width: 166, 
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
  },
  bigTitleContainer: {
    backgroundColor: "black",
    height: 40, 
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
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 2.5,
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
