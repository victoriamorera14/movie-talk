import { View, Text, Pressable } from "react-native";
import React from "react";
import AccesoChat from "../components/AccesoChat";
import { useNavigation } from "@react-navigation/native";

export default function Chats() {
  
  const navigation = useNavigation();

  return (
    <View>
      <Pressable onPress={() => navigation.navigate("Chat")}>
        <AccesoChat
          firstLineText="Título del chat"
          secondLineText="Último mensaje enviado"
        />
      </Pressable>
    </View>
  );
}
