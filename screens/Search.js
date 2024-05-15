import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchFilter from "../components/SearchFilter";
import CustomButton from "../components/CustomButton";
import API_KEY from "../api/API_KEY";
import { Fetch } from "../api/API";
import { FlatList } from "react-native-web";

export default function Search() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);
  const [searchString, setSearchString] = useState("");

  const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${API_KEY}`;
  const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

  const ApiCall = () => {
    setIsLoading(true);
    setError(null);

    TryCatch(SEARCH_API_URL);
  };

  const searchMovies = (searchString) => {
    setSearchString(searchString);
    ApiCall();
  };

  useEffect(() => {
    TryCatch(POPULAR_API_URL);
  });

  async function TryCatch(SEARCH_API_URL) {
    try {
      const data = await Fetch(SEARCH_API_URL);
      setMovies(data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }

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
          height={46}
          width={46}
          iconSource={"options-outline"}
          onPress={() => {
            console.log("xd");
          }}
        />
      </View>
      {movies && (
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <MovieCard
              isBigCard={true}
              image={item.poster_path}
              title={item.title}
              key={item.id}
            />
          )}
          numColumns={2}
          columnWrapperStyle={styles.movieList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  movieList: {
    flex: 1,
    justifyContent: "space-between",
    padding: 25,
  },
});
