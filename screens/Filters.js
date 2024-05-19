import { View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import DropdownComponent from "../components/Desplegable";

export default function Filters() {
  const navigation = useNavigation();

  const [year, setYear] = useState("");

  const FILTER_API_URL = `https://api.themoviedb.org/3/discover/movie?&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31&api_key=${API_KEY}`;

  return (
    <View>
<DropdownComponent></DropdownComponent>
      <CustomButton
        borderRadius={30}
        defaultColor={"red"}
        pressedColor={"green"}
        height={50}
        width={100}
        text={"2000"}
        onPress={() => {
          setYear("2000");
        }}
      />
      <CustomButton
        borderRadius={20}
        defaultColor={"black"}
        height={50}
        width={200}
        pressedColor={"green"}
        text={"Submit"}
        onPress={() => {
          navigation.navigate("Search", { URL: FILTER_API_URL });
        }}
      />
    </View>
  );
}
