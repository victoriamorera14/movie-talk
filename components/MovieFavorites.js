import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import FavoriteMark from "./FavoriteMark";
import { useNavigation } from "@react-navigation/native";
import useFetch from "../hooks/useFetch";
import API_KEY from "../api/API_KEY";
import IMAGE_PATH from "../utils/IMAGE_PATH";

export default function MovieFavorites({ movieId }) {
  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(DETAILS_API_URL);
  }, []);

  const [pressed, setPressed] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Detail", { movieId: movieId });
  };

  return (
    <>
      {movies && (
        <Pressable
          onPress={handlePress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
        >
          <ImageBackground
            source={{ uri: `${IMAGE_PATH}${movies.backdrop_path}` }}
            style={[styles.bigImage, pressed && styles.pressed]}
          >
            <View style={styles.bigFavMarkContainer}>
              <FavoriteMark movieId={movieId} />
            </View>
            <View style={styles.bigTitleContainer}>
              <Text style={styles.title}>{movies.title}</Text>
            </View>
          </ImageBackground>
        </Pressable>
      )}
    </>
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
    fontFamily: "Ubuntu-Bold",
    textAlign: "center",
    overflow: "hidden",
    marginBottom: 2.5,
  },
  pressed: {
    transform: [{ scale: 0.9 }],
  },
});
