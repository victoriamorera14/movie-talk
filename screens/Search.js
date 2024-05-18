import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import CustomButton from "../components/CustomButton";
import API_KEY from "../api/API_KEY";
import { FlatList } from "react-native";
import useFetch from "../hooks/useFetch";
import { useNavigation } from "@react-navigation/native";

export default function Search({ route }) {
  const { URL } = route.params != null && route.params;
  console.log(URL);

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
    ApiCall(SEARCH_API_URL);
    setSelectedFilterText(-1);
  };

  URL != null && ApiCall(URL);

  useEffect(() => {
    ApiCall(POPULAR_API_URL);
  }, []);

  return (
    <View>
      <View style={styles.topContainer}>
        <SearchFilter
          searchMovies={searchMovies}
          showIconLeft={true}
          showIconRight={false}
        />
        <CustomButton
          borderRadius={90}
          defaultColor={"#E92348"}
          pressedColor={"#373246"}
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
      {movies && (
        <View>
          <FlatList
            numColumns={2}
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
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  highlightedFilterText: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    paddingHorizontal: 30,
  },
  notHighlightedFilterText: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    paddingHorizontal: 30,
    opacity: 0.4,
  },
  movieList: {
    flex: 1,
    justifyContent: "space-between",
    padding: 25,
  },
});
