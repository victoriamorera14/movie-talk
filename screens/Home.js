import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState} from "react";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/colors";
import IMAGE_PATH from "../utils/IMAGE_PATH";

export default function Home() {
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const DEMO_CAROUSEL_API_URL = `https://api.themoviedb.org/3/movie/102?api_key=${API_KEY}`;

  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(DEMO_CAROUSEL_API_URL);
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      {movies && (
        <View style={styles.homeCarousel}>
          <CarouselComponent
            description={movies.overview}
            image={`${IMAGE_PATH}${movies.poster_path}`}
          />
        <View style={styles.homeCarouselButtons}>
            <Ionicons
              name="ellipse"
              size={15}
              color={colors.mainColors.secondary}
            />
            <Ionicons
              name="ellipse"
              size={15}
              color={colors.mainColors.gray3}
            />
          </View>
        </View>
      )}
      <MovieHorizontalList
        URL={TRENDING_API_URL}
        isBigCard={true}
        title={"Trending"}
      />
      <MovieHorizontalList
        URL={POPULAR_API_URL}
        isBigCard={false}
        title={"Popular"}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    height: "100%",
    backgroundColor: colors.mainColors.primary,
  },
  homeCarousel: {
    height: "auto",
    width: "100%",
    flexDirection: "column",
    backgroundColor: colors.mainColors.primary,
  },
  homeCarouselButtons:{
    flexDirection: "row",
    justifyContent: "center",
  }
});
