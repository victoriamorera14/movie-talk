import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/Desplegable";
import { colors } from "../utils/colors";

export default function Filters() {
  const navigation = useNavigation();

  const yearData = [
    { label: "2000", value: "2000" },
    { label: "2001", value: "2001" },
    { label: "2002", value: "2002" },
    { label: "2003", value: "2003" },
    { label: "2004", value: "2004" },
    { label: "2005", value: "2005" },
    { label: "2006", value: "2006" },
    { label: "2007", value: "2007" },
    { label: "2008", value: "2008" },
    { label: "2009", value: "2009" },
    { label: "2010", value: "2010" },
    { label: "2011", value: "2011" },
    { label: "2012", value: "2012" },
    { label: "2013", value: "2013" },
    { label: "2014", value: "2014" },
    { label: "2015", value: "2015" },
    { label: "2016", value: "2016" },
    { label: "2017", value: "2017" },
    { label: "2018", value: "2018" },
    { label: "2019", value: "2019" },
    { label: "2020", value: "2020" },
    { label: "2021", value: "2021" },
    { label: "2022", value: "2022" },
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
  ];
  const genreData = [
    { label: "Terror", value: "27" },
    { label: "Action", value: "28" },
    { label: "Adventure", value: "12" },
    { label: "Fantasy", value: "14" },
    { label: "Comedy", value: "35" },
    { label: "Drama", value: "18" },
    { label: "Western", value: "37" },
  ];
  const ratingData = [
    { label: "5", value: "5" },
    { label: "5.5", value: "5.5" },
    { label: "6", value: "6" },
    { label: "6.5", value: "6.5" },
    { label: "7", value: "7" },
    { label: "7.5", value: "7.5" },
    { label: "8", value: "8" },
    { label: "8.5", value: "8.5" },
  ];

  const [year, setYear] = useState("");
  const [vote, setVote] = useState("");
  const [genre, setGenre] = useState("");

  const FILTER_API_URL = `https://api.themoviedb.org/3/discover/movie?${
    vote && `vote_average.gte=${vote}`
  }${`&with_genres=${genre}`}${
    year &&
    `&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31`
  }&api_key=${API_KEY}`;

  return (
    <View style={styles.container}>
      <View>
        <DropdownComponent
          setState={(value) => setYear(value)}
          data={yearData}
          filterText={"release year"}
        />
        <DropdownComponent
          setState={(value) => setVote(value)}
          data={ratingData}
          filterText={"rating"}
        />
        <DropdownComponent
          setState={(value) => setGenre(value)}
          data={genreData}
          filterText={"genre"}
        />
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
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.mainColors.primary,
  },
  button: {
    alignItems: "center",
  },
});
