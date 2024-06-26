import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import MovieHorizontalList from "../components/MovieHorizontalList";
import CarouselComponent from "../components/CarouselComponent";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";
import { colors } from "../utils/colors";
import IMAGE_PATH from "../utils/IMAGE_PATH";
import { favorites } from "../utils/favorites";
import MovieFavorites from "../components/MovieFavorites";
import { observer } from "mobx-react-lite";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";

export default observer(function Home() {
  const TRENDING_API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
  const DEMO_CAROUSEL_API_URL = `https://api.themoviedb.org/3/movie/102?api_key=${API_KEY}`;
  const ACTION_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=28&api_key=${API_KEY}`;
  const TERROR_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=27&api_key=${API_KEY}`;
  const FANTASY_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=14&api_key=${API_KEY}`;
  const COMEDY_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=35&api_key=${API_KEY}`;
  const ADVENTURE_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=12&api_key=${API_KEY}`;
  const WESTERN_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=37&api_key=${API_KEY}`;
  const DRAMA_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=18&api_key=${API_KEY}`;
  const SCIFI_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=878&api_key=${API_KEY}`;
  const FAMILY_API_URL = `https://api.themoviedb.org/3/discover/movie?&with_genres=10751&api_key=${API_KEY}`;

  const navigation = useNavigation();

  const { isLoading, error, movies, ApiCall } = useFetch();

  useEffect(() => {
    ApiCall(DEMO_CAROUSEL_API_URL);
  }, []);

  const handlePress = (movieId) => {
    navigation.navigate("Detail", { movieId: movieId });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading && <Loader />}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {movies && (
          <Pressable onPress={() => handlePress(movies.id)}>
            <View style={styles.homeCarousel}>
              <CarouselComponent
                description={movies.overview}
                image={`${IMAGE_PATH}${movies.poster_path}`}
              />
            </View>
          </Pressable>
        )}
        <MovieHorizontalList
          URL={TRENDING_API_URL}
          isBigCard={true}
          title={"Trending"}
        />
        <Text style={styles.title}>Favorites</Text>
        {favorites.favoriteList.length > 0 ? (
          <FlatList
            data={favorites.favoriteList}
            renderItem={({ item }) => <MovieFavorites movieId={item} />}
            contentContainerStyle={styles.columnWrapper}
            keyExtractor={(item) => item}
            horizontal
          />
        ) : (
          <Text style={styles.noFavsText}>No favorites Yet</Text>
        )}
        <MovieHorizontalList
          URL={ACTION_API_URL}
          isBigCard={false}
          title={"Action"}
        />
        <MovieHorizontalList
          URL={ADVENTURE_API_URL}
          isBigCard={false}
          title={"Adventure"}
        />
        <MovieHorizontalList
          URL={COMEDY_API_URL}
          isBigCard={false}
          title={"Comedy"}
        />
        <MovieHorizontalList
          URL={DRAMA_API_URL}
          isBigCard={false}
          title={"Drama"}
        />
        <MovieHorizontalList
          URL={FAMILY_API_URL}
          isBigCard={false}
          title={"Family"}
        />
        <MovieHorizontalList
          URL={FANTASY_API_URL}
          isBigCard={false}
          title={"Fantasy"}
        />
        <MovieHorizontalList
          URL={SCIFI_API_URL}
          isBigCard={false}
          title={"Science Fiction"}
        />
        <MovieHorizontalList
          URL={TERROR_API_URL}
          isBigCard={false}
          title={"Terror"}
        />
        <MovieHorizontalList
          URL={WESTERN_API_URL}
          isBigCard={false}
          title={"Western"}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.mainColors.primary,
  },
  homeCarousel: {
    height: "auto",
    width: "100%",
    flexDirection: "column",
    backgroundColor: colors.mainColors.primary,
  },
  homeCarouselButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  columnWrapper: {
    gap: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Ubuntu-Medium",
    fontSize: 25,
    color: "white",
  },
  noFavsText: {
    color: "white",
    fontFamily: "Ubuntu-Regular",
    fontSize: 14,
    alignSelf: "center",
    margin: 25,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
