import { View, StyleSheet} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownYearComponent from "../components/DesplegableAño";
import DropdownVoteComponent from "../components/DesplegableNota";
import DropdownGenreComponent from "../components/DesplegableGenero";
import { colors } from "../utils/colors";

export default function Filters() {
  const navigation = useNavigation();

  const [year, setYear] = useState("");
  const [vote, setVote] = useState("");
  //const [PG, setPG] = useState("");
  const [genre, setGenre] = useState("");

  const FILTER_API_URL = `https://api.themoviedb.org/3/discover/movie?${vote && `vote_average.gte=${vote}`}${`&with_genres=${genre}`}${year && `&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`}&api_key=${API_KEY}`;

  return (
    <View style={styles.container}>
    <View>
      <DropdownYearComponent setYear={(value) => setYear(value)} />
      <DropdownVoteComponent setVote={(value) => {setVote(value)}} />
      <DropdownGenreComponent setGenre={(value) => {setGenre(value)}} />
      <View style={styles.button}>
      <CustomButton
        borderRadius={20}
        defaultColor={colors.mainColors.secondary}
        height={40}
        width={100}
        pressedColor={"green"}
        text={"Submit"}
        onPress={() => {
          navigation.navigate("Search", { URL: FILTER_API_URL });
        }}
      /></View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    height: "100%",
    backgroundColor: colors.mainColors.primary,
  },
  button:{
    alignItems:"center",
  },
});
