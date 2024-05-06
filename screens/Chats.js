import { View, Text } from "react-native";
import React from "react";
import Titulo from "../components/Titulo";
import AccesoChat from "../components/AccesoChat";

export default function Chats() {
  return (
    <View>
      <Titulo text="Título de la página" showIcon={true} />
      <AccesoChat
        firstLineText="Título del chat"
        secondLineText="Último mensaje enviado"
        containerBackgroundColor="#A09BB0"
      />
    </View>
  );
}
