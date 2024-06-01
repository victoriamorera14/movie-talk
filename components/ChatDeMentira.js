import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { colors } from "../utils/colors";

export default function ChatProvisional({ session }) {
  console.log(session);
  const [messages, setMessages] = useState(null);
  const [messageValue, setMessageValue] = useState("");

  const addMessageSupabaseClient = async (newMessage) => {
    const newMessageObj = { content: newMessage, user_id: session.user.id };
    const { data, error } = await supabase
      .from("messages")
      .insert(newMessageObj)
      .select();
    error && console.error(error);
  };

  const handleSubmit = () => {
    addMessageSupabaseClient(messageValue);
  };

  const getMessageSupabaseClient = async () => {
    const { data, error } = await supabase.from("messages").select("*");
    !error ? setMessages(data) : console.error(error);
  };

  const handlePayload = (payload) => {
    setMessages((prev) => [...prev, payload.new]);
  };

  useEffect(() => {
    getMessageSupabaseClient();

    const dbChanel = supabase
      .channel("dbChannel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => handlePayload(payload)
      )
      .subscribe();

    return () => {
      supabase.removeChannel(dbChanel);
    };
  }, []);

  return (
    <>
      <View style={styles.containerChat}>
        {messages &&
          messages.map((message) => (
            <View
              key={message.id}
              style={
                session.user.id === message.user_id
                  ? styles.myMessage
                  : styles.notMyMessage
              }
            >
              {message.content}
            </View>
          ))}
      </View>
      <View style={styles.containerInput}>
      <TextInput style={styles.InputUsuario}
        placeholder="message"
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => setMessageValue(text)}
      />
      <Pressable style={styles.botonEnviar} onPress={handleSubmit}>
        <Text>Enviar</Text>
      </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.mainColors.primary },
  containerChat: {
    height: "92%",
    width: "100%",
    backgroundColor:colors.mainColors.gray3,
    borderRadius: 20,
    alignItems: "center",
    padding:10,
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.mainColors.gray2,
    borderRadius: 20,
    margin:10,
    width: "100%",
    height: "7%",
  },
  myMessage: {
    backgroundColor: colors.mainColors.secondary,
    width: "90%",
    height: 20,
    margin: 5,
    borderRadius: 10,
    fontFamily: "Ubuntu-Regular",
  },
  notMyMessage: {
    backgroundColor: colors.mainColors.gray1,
    width: "90%",
    height: 20,
    margin: 5,
    borderRadius: 10,
    fontFamily: "Ubuntu-Regular",
  },
  InputUsuario: {
    width: "80%",
    padding: 10,
  },
  botonEnviar: {
    backgroundColor: colors.mainColors.gray3,
    width: "10%",
    borderRadius: 15,
  },
  userInput: {},
});
