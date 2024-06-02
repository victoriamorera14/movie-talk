import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

export default function AccesoChat({ firstLineText, secondLineText}) {
  return (
    <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        value={firstLineText}
        onChangeText={(text) => console.log(text)}
      />
      <Text style={styles.secondLineText}>
        {secondLineText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: colors.mainColors.gray2
  },
  input: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 18,
    paddingBottom:10,
    color: "white", 
  },
  secondLineText: {
    fontSize: 14,
    color: "black", 
    fontFamily: "Ubuntu-Regular",
  },
});
