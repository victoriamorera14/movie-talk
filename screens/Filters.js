import { View, StyleSheet} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/Desplegable";

import { colors } from "../utils/colors";

export default function Filters() {
  const navigation = useNavigation();

  const yearData = [
    { label: '2000', value: '2000' },
    { label: '2001', value: '2001' },
    { label: '2002', value: '2002' },
    { label: '2020', value: '2020' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
  ];

  const genreData = [
    { label: 'Terror', value: '27' },
    { label: 'Action', value: '28' },
    { label: 'Adventure', value: '12' },
    { label: 'Fantasy', value: '14' },
    { label: 'Comedy', value: '35' },
    { label: 'Drama', value: '18' },
    { label: 'Western', value: '37' },
  ];
  const ratingData = [
    { label: '5', value: '5' },
    { label: '5.5', value: '5.5' },
    { label: '6', value: '6' },
    { label: '6.5', value: '6.5' },
    { label: '7', value: '7' },
    { label: '7.5', value: '7.5' },
    { label: '8', value: '8' },
    { label: '8.5', value: '8.5' },
  ];

  const [year, setYear] = useState("");
  const [vote, setVote] = useState("");
  //const [PG, setPG] = useState("");
  const [genre, setGenre] = useState("");

  const FILTER_API_URL = `https://api.themoviedb.org/3/discover/movie?${vote && `vote_average.gte=${vote}`}${`&with_genres=${genre}`}${year && `&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`}&api_key=${API_KEY}`;

  return (
    <View style={styles.container}>
    <View>
      <DropdownComponent setYear={(value) => setYear(value)} data={yearData} />
      <DropdownComponent setVote={(value) => setVote(value)} data={ratingData}/>
      <DropdownComponent setGenre={(value) => setGenre(value)} data={genreData}/>
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
