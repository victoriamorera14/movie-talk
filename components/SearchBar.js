import { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
//import useThemeColors from "../hooks/useThemeColors";

export default function SearchBox({ searchMovies }) {

  const [searchString, setSearchString] = useState("");
  //const themeColors = useThemeColors();
  //const styles = getThemedStylesheet(themeColors);
  
  const handleSearch = () => {
    console.log(colors);
    searchMovies(searchString);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onChangeText={(text) => setSearchString(text)}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    width: "100%",
  },
  searchInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "grey",
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