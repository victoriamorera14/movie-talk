import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import API_KEY from "../api/API_KEY";
import useFetch from "../hooks/useFetch";
import { colors } from "../utils/colors";
import IMAGE_PATH from "../utils/IMAGE_PATH";
import MovieHorizontalList from "../components/MovieHorizontalList";
import { LinearGradient } from "expo-linear-gradient";
import FavouriteMarkDetails from "../components/FavouriteMarkDetails";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Detail({ route }) {
  const { movieId } = route.params;

  const DETAILS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const CREDITS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  const RELATED_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_KEY}`;

  const { isLoading, error, movies, ApiCall } = useFetch();
  const [credits, setCredits] = useState(null);

  const [showMoreText, setShowMoreText] = useState(false);

  const [showMoreCast, setShowMoreCast] = useState(false);

  useEffect(() => {
    ApiCall(DETAILS_API_URL);
    fetch(CREDITS_API_URL)
      .then((response) => response.json())
      .then((data) => setCredits(data))
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <ScrollView style={styles.container}>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {movies && (
        <>
          <View style={styles.detailsHeader}>
            <Image
              style={styles.image}
              source={{ uri: `${IMAGE_PATH}${movies.backdrop_path}` }}
            />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              style={styles.gradient}
            />
            <Text style={styles.title}>
              {movies.title}
              <FavouriteMarkDetails movieId={movies.id} />
            </Text>
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
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description:</Text>
            <Text style={styles.overview} numberOfLines={showMoreText ? 15 : 2}>
              {movies.overview}
            </Text>
            <Pressable onPress={() => setShowMoreText(!showMoreText)}>
              <Text style={styles.showMore}>
                {showMoreText ? "Show less..." : "Show more..."}
              </Text>
            </Pressable>
          </View>

          {movies.belongs_to_collection && (
            <View style={styles.collectionContainer}>
              <Text style={styles.collectionTitle}>Collection:</Text>
              <Text style={styles.collectionName}>
                {movies.belongs_to_collection.name}
              </Text>
            </View>
          )}

          <View style={styles.additionalInfoContainer}>
            <Text style={styles.additionalInfoTitle}>
              Additional Information:
            </Text>
            <Text style={styles.additionalInfo}>
              Budget: ${movies.budget.toLocaleString()}
            </Text>
            <Text style={styles.additionalInfo}>
              Release Date: {movies.release_date}
            </Text>
            <Text style={styles.additionalInfo}>
              Runtime: {movies.runtime} minutes
            </Text>
            <Text style={styles.additionalInfo}>Tagline: {movies.tagline}</Text>
            <Text style={styles.additionalInfo}>
              Homepage:{" "}
              <Text
                style={styles.link}
                onPress={() => Linking.openURL(movies.homepage)}
              >
                {movies.homepage}
              </Text>
            </Text>
          </View>

          {credits && (
            <View style={styles.castContainer}>
              <Text style={styles.castTitle}>Cast:</Text>
              {credits.cast.slice(0, showMoreCast ? 6 : 3).map((actor) => (
                <View key={actor.cast_id} style={styles.actorContainer}>
                  <Image
                    style={styles.actorImage}
                    source={{ uri: `${IMAGE_PATH}${actor.profile_path}` }}
                  />
                  <Text style={styles.actorName}>{actor.name}</Text>
                  <Text style={styles.actorCharacter}>
                    {" "}
                    as {actor.character}
                  </Text>
                </View>
              ))}
              <Pressable onPress={() => setShowMoreCast(!showMoreCast)}>
                <Text style={styles.showMore}>
                  {showMoreCast ? "Show less..." : "Show more..."}
                </Text>
              </Pressable>
            </View>
          )}
          <MovieHorizontalList
            URL={RELATED_API_URL}
            isBigCard={true}
            title={"Related Movies:"}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.mainColors.primary },
  image: {
    height: 300,
    width: "100%",
    position: "absolute",
  },
  detailsHeader: {
    height: 300,
    width: "100%",
    position: "relative",
    marginBottom: 20,
  },
  gradient: {
    height: 300,
    width: "100%",
    position: "absolute",
  },
  title: {
    display: "flex",
    gap: 10,
    fontSize: 24,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 30,
    fontFamily: "Ubuntu-Bold",
    color: "white",
    maxWidth: 400,
    marginBottom: 10,
  },
  genre: {
    color: "white",
    fontSize: 16,
    marginHorizontal: 5,
    fontFamily: "Ubuntu-Regular",
    marginBottom: 5,
    textAlign: "center",
  },
  genresContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "10%",
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
    fontFamily: "Ubuntu-Bold",
    color: colors.mainColors.secondary,
  },
  vote: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Ubuntu-Bold",
    color: "white",
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  descriptionTitle: {
    color: colors.mainColors.secondary,
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  overview: {
    color: "white",
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    textAlign: "justify",
    marginBottom: 8,
  },
  showMore: {
    color: colors.mainColors.secondary,
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    textAlign: "justify",
  },
  collectionContainer: {
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  collectionTitle: {
    color: colors.mainColors.secondary,
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  collectionName: {
    color: "white",
    fontSize: 16,
    fontFamily: "Ubuntu-Regular",
    marginBottom: 5,
  },
  additionalInfoContainer: {
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  additionalInfoTitle: {
    color: colors.mainColors.secondary,
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  additionalInfo: {
    color: "white",
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
    marginBottom: 5,
  },
  link: {
    color: colors.mainColors.secondary,
    textDecorationLine: "underline",
  },
  platforms: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Ubuntu-Bold",
    marginBottom: 10,
  },
  company: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Ubuntu-Regular",
    marginBottom: 5,
  },
  castContainer: {
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  castTitle: {
    color: colors.mainColors.secondary,
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  actorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  actorName: {
    color: "white",
    fontSize: 16,
    fontFamily: "Ubuntu-Bold",
  },
  actorCharacter: {
    color: colors.mainColors.secondary,
    fontSize: 14,
    fontFamily: "Ubuntu-Regular",
  },
});
