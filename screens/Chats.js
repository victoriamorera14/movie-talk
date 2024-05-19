import { View, Text } from "react-native";
import React from "react";
import AccesoChat from "../components/AccesoChat";

export default function Chats() {
  return (
    <View>
      <AccesoChat
        firstLineText="Título del chat"
        secondLineText="Último mensaje enviado"
      />
    </View>
  );
}
