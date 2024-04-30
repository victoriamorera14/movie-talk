import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function AccesoChat({ firstLineText, secondLineText, containerBackgroundColor }) {
  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
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
    padding: 10,
    borderRadius: 10,
    margin:10
  },
  input: {
    fontSize: 18,
    paddingBottom:10,
    fontWeight: "bold",
    color: "white", 
  },
  secondLineText: {
    fontSize: 14,
    color: "black", 
  },
});
