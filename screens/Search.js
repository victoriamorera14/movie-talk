import { View, Text, StyleSheet, Pressable, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import CustomButton from "../components/CustomButton";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";
import Loader from "../components/Loader";

export default function Search({ route }) {
  const { URL } = route.params != null && route.params;

  const windowDimensions = Dimensions.get('window');

  const [selectedFilterText, setSelectedFilterText] = useState(0);
  const [searchString, setSearchString] = useState("");

  const navigation = useNavigation();

  const { isLoading, error, movies, ApiCall } = useFetch();

  const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${API_KEY}`;
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const UPCOMING_API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
  const TOP_RATED_API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const searchMovies = (searchString) => {
    setSearchString(searchString);
    setSelectedFilterText(-1);
  };

  useEffect(() => {
    if (searchString != "") {
      ApiCall(SEARCH_API_URL);
    } else {
      ApiCall(POPULAR_API_URL);
    }
  }, [searchString]);

  useEffect(() => {
    if (URL != null) {
      ApiCall(URL);
    } else {
      ApiCall(POPULAR_API_URL);
    }
  }, [URL]);

  return (
    <>
      <View style={styles.backgroundColor}>
        <View style={styles.topContainer}>
          <SearchFilter
            searchMovies={searchMovies}
            showIconLeft={true}
            showIconRight={false}
          />
          <CustomButton
            borderRadius={90}
            defaultColor={colors.mainColors.secondary}
            pressedColor={colors.mainColors.gray2}
            height={38}
            width={38}
            iconSource={"options-outline"}
            onPress={() => {
              navigation.navigate("Filters");
            }}
          />
        </View>
        <View style={styles.filterTextContainer}>
          <Pressable
            onPress={() => {
              setSelectedFilterText(0);
              ApiCall(POPULAR_API_URL);
            }}
          >
            <Text
              style={
                selectedFilterText == 0
                  ? styles.highlightedFilterText
                  : styles.notHighlightedFilterText
              }
            >
              Popular
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelectedFilterText(1);
              ApiCall(TOP_RATED_API_URL);
            }}
          >
            <Text
              style={
                selectedFilterText == 1
                  ? styles.highlightedFilterText
                  : styles.notHighlightedFilterText
              }
            >
              Top Rated
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setSelectedFilterText(2);
              ApiCall(UPCOMING_API_URL);
            }}
          >
            <Text
              style={
                selectedFilterText == 2
                  ? styles.highlightedFilterText
                  : styles.notHighlightedFilterText
              }
            >
              Upcoming
            </Text>
          </Pressable>
        </View>
        {isLoading && <Loader />}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {movies && (
          <FlatList
            numColumns={windowDimensions.width < 768 ? 2 : 3}
            columnWrapperStyle={styles.movieList}
            data={movies.results}
            renderItem={({ item }) => (
              <MovieCard
                movieId={item.id}
                isBigCard={true}
                image={item.poster_path}
                title={item.title}
                key={item.id}
              />
            )}
          />
        )}

      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: colors.mainColors.primary,
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingTop: 35,
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 15,
    gap: 10,
  },
  filterTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  highlightedFilterText: {
    fontSize: 18,
    fontFamily: "Ubuntu-Medium",
    color: "white",
  },
  notHighlightedFilterText: {
    fontSize: 18,
    fontFamily: "Ubuntu-Medium",
    color: colors.mainColors.gray1,
    opacity: 0.4,
  },
  movieList: {
    flex: 1,
    justifyContent: "center",
    padding: 5,
  },
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
