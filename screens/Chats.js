import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import AccesoChat from "../components/AccesoChat";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../utils/colors";

export default function Chats() {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.containerPressable} onPress={() => navigation.navigate("Chat")}>
        <AccesoChat
          firstLineText="Título del chat"
          secondLineText="Último mensaje enviado"
        />
      </Pressable>
      <Pressable style={styles.containerPressable} onPress={() => navigation.navigate("Chat")}>
        <AccesoChat
          firstLineText="Título del chat"
          secondLineText="Último mensaje enviado"
        />
      </Pressable>
      <Pressable style={styles.containerPressable} onPress={() => navigation.navigate("Chat")}>
        <AccesoChat
          firstLineText="Título del chat"
          secondLineText="Último mensaje enviado"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor:colors.mainColors.primary,
    alignItems: "center",
    padding: 5,
  },
  containerPressable:{
    width: "90%",
  },  
});