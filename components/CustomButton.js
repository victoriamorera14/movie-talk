import React, { useState } from "react";
import { TouchableHighlight, Text, StyleSheet, View, Image } from "react-native";

export default function CustomButton({ onPress, text, imageSource, width, height, defaultColor, pressedColor, borderRadius }) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={pressedColor} 
      style={[
        styles.button,
        { width, height, backgroundColor: pressed ? pressedColor : defaultColor, borderRadius }, 
      ]}
      onPressIn={() => setPressed(true)} 
      onPressOut={() => setPressed(false)} 
    >
      <View style={styles.content}>
        {text && <Text style={styles.buttonText}>{text}</Text>}
        {imageSource && <Image source={imageSource} style={styles.buttonImage} />}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonImage:{
    width: 20,
    height:20,
  },
});
