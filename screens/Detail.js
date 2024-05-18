import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";
import { colors } from "../utils/colors";

export default function Detail({ route }) {
  const { movieId } = route.params;

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const imagePath = "http://image.tmdb.org/t/p/w500/";
  const { isLoading, error, movies, ApiCall } = useFetch();

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    ApiCall(DETAILS_API_URL);
  }, []);

  console.log(DETAILS_API_URL);

  return (
    <ScrollView style={styles.container}>
      {movies && (
        <>
          <View style={styles.detailsHeader}>
            <Image
              style={styles.image}
              source={{ uri: `${imagePath}${movies.backdrop_path}` }}
            />
            <Text style={styles.title}>{movies.title}</Text>
          </View>
          <View style={styles.genresContainer}>
            {movies.genres.map((genre) => (
              <Text key={genre.id} style={styles.genre}>
                {genre.name}
              </Text>
            ))}
          </View>
          <View style={styles.userRatingContainer}>
            <Text style={styles.voteText}>USER RATING</Text>
            <Text style={styles.vote}>{movies.vote_average}</Text>
          </View>
          <View style={styles.descriptionCobtainer}>
          <Text style={styles.descriptionTitle}>Description:</Text>
          <Text style={styles.overview} numberOfLines={showMore ? 15:2}>
            {movies.overview}
            
          </Text>
          <Pressable onPress={() => setShowMore(!showMore)}><Text style={styles.showMore}>{showMore ? "Show less...":"Show more..."}</Text></Pressable>
          </View>
          <Text style={styles.platforms}>Available on:</Text>
          {/* {movies.production_companies.map((company) => (
            <Text key={company.id} style={styles.company}>
              {company.name}
            </Text>
          ))} */}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //padding: 20,
    backgroundColor: colors.mainColors.primary,
  },
  detailsHeader: {},
  image: {
    height: 300,
    //aspectRatio: 1,
    width: "auto",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    position: "absolute",
    top: 250,
    left: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    maxWidth: 400,
    marginBottom: 10,
  },
  genre: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  genresContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },

  userRatingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
  },
  voteText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.mainColors.secondary,
  },
  vote: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  descriptionCobtainer:{
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  descriptionTitle:{
    color:colors.mainColors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },

  overview: {
    color:"white",
    fontSize: 14,
    textAlign: "justify",
    marginBottom: 8,
  },

  showMore:{
    color:colors.mainColors.secondary,
    fontSize: 14,
    textAlign: "justify",
  },

  platforms: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  company: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
});
