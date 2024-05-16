import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import FavoriteMark from "./FavoriteMark";

export default function MovieCard({ isBigCard, title, image, movie }) {
  const imageSource = `http://image.tmdb.org/t/p/w500/${image}`;
  const [pressed, setPressed] = useState(false);
  
  const handlePress = () => {
    navigation.navigate("Detail", { movieId: movie });
    console.log(movie);
  };

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <ImageBackground
        source={imageSource}
        style={[isBigCard ? styles.bigImage : styles.smallImage,
          pressed && styles.pressed,
        ]
        }
      >
        <View
          style={[
            isBigCard
              ? styles.bigFavMarkContainer
              : styles.smallFavMarkContainer,
          
          ]}
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
    </Pressable>
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
    margin: 10,
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
    margin: 10,
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
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
