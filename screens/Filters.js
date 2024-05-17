import { View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

export default function Filters() {
  const navigation = useNavigation();

  const [year, setYear] = useState("");

  return (
    <View>
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
          navigation.navigate("Search", { year: year });
        }}
      />
    </View>
  );
}
