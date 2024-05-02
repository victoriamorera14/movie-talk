import { useState } from "react";
import { Keyboard, StyleSheet, TextInput, View } from "react-native";
import CustomButton from "./CustomButton";
//import useThemeColors from "../hooks/useThemeColors";

export default function SearchBox({ sendText }) {
  const [searchString, setSearchString] = useState("");
  //const themeColors = useThemeColors();
  //const styles = getThemedStylesheet(themeColors);
  
  const handleSearch = () => {
    console.log(colors);
    sendText(searchString);
    Keyboard.dismiss();
  };


  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="Write your text here..."
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => setSearchString(text)}
      />
      <CustomButton
        onPress={handleSearch}
        iconSource="chatbox-ellipses-outline"
        width={35}
        height={35}
        defaultColor={"#777189"}
        pressedColor={"#373246"}
        borderRadius={50}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    alignItems: "center",
  },
  searchInput: {
    color:"white",
    backgroundColor: "#777189",
    //height: 40,
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
