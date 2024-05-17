import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/colors";
//import useThemeColors from "../hooks/useThemeColors";

export default function SearchFilter({ searchMovies, showIconLeft, showIconRight}) {
  const [searchString, setSearchString] = useState("");
  const [changeVisibility, setchangeVisibility] = useState(false);
  //const themeColors = useThemeColors();
  //const styles = getThemedStylesheet(themeColors);
  
  const handleSearch = () => {
    searchMovies(searchString);
    //Keyboard.dismiss();
  };
  const handlePress = () => {
    setchangeVisibility (!changeVisibility);
  };

  return (
    <View style={styles.searchWrapper}>
        {showIconLeft && <Pressable onPress={handleSearch}><Ionicons name="search" size={25} style={styles.searchIcon}></Ionicons></Pressable>}
        <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={"#FFFFFFC2"}
        secureTextEntry={changeVisibility}
        onChangeText={(text) => setSearchString(text)}
        onSubmitEditing={handleSearch}
      />
      
       {showIconRight && <Pressable onPress={handlePress}><Ionicons name={changeVisibility ? "eye-off": "eye"} size={25} style={styles.hiddenIcon}></Ionicons></Pressable>}
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.mainColors.gray3,
    height: 40,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: "15px",
    padding: 5,
    flex: 1,
  },
  searchInput: {
    color:"white",
    outlineStyle: 'none',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  searchIcon:{
    color: "white",
    marginRight: 10,
  },
  hiddenIcon:{
    color: "white",
    marginLeft: 10,
  }
});
/*
function getThemedStylesheet(colors) {
  return StyleSheet.create({
    tabBar: {
      backgroundColor: colors.surface
    }
  });
}*/
