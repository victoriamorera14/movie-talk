import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
//import useThemeColors from "../hooks/useThemeColors";

export default function SearchFilter({ searchMovies, showIconLeft, showIconRight}) {
  const [searchString, setSearchString] = useState("");
  //const themeColors = useThemeColors();
  //const styles = getThemedStylesheet(themeColors);
  
  const handleSearch = () => {
    console.log(colors);
    searchMovies(searchString);
    Keyboard.dismiss();
  };


  return (
    <View style={styles.searchWrapper}>
        {showIconLeft && <Ionicons name="search" size={25}></Ionicons>}
        <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => setSearchString(text)}
      />
       {showIconRight && <Ionicons name="eye" size={25}></Ionicons>}
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  searchInput: {
    backgroundColor: "#777189",
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: "15px",
    padding: 5,
    flex: 1,
  },
});
/*
function getThemedStylesheet(colors) {
  return StyleSheet.create({
    tabBar: {
      backgroundColor: colors.surface
    }
  });
}*/
