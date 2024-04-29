import { useState } from "react";
import { Button, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { colors } from "./utils/colors";

export default function SearchBox({ searchMovies }) {

  const [searchString, setSearchString] = useState("");

  const handleSearch = () => {
    console.log('searchstring:', searchString)
    searchMovies(searchString);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="Escriu qualsevol cosa..."
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