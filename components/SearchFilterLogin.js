import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../utils/colors";

export default function SearchFilterLogin({
  setLoginText,
  fieldName,
  showIconRight,
}) {
  const [changeVisibility, setchangeVisibility] = useState(
    fieldName === "password" ? true : false
  );

  const handlePress = () => {
    setchangeVisibility(!changeVisibility);
  };

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={fieldName}
        placeholderTextColor={"#FFFFFFC2"}
        secureTextEntry={changeVisibility}
        onChangeText={(text) => setLoginText(text, fieldName)}
      />
      {showIconRight && (
        <Pressable onPress={handlePress}>
          <Ionicons
            name={changeVisibility ? "eye-off" : "eye"}
            size={25}
            style={styles.hiddenIcon}
          ></Ionicons>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    backgroundColor: colors.mainColors.gray3,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    padding: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  searchInput: {
    color: "white",
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Ubuntu-Light",
  },
  searchIcon: {
    color: "white",
    marginRight: 10,
  },
  hiddenIcon: {
    color: "white",
    marginLeft: 10,
  },
});
