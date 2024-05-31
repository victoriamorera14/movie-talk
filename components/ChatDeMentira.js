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
      <View>
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
      <TextInput
        placeholder="message"
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => setMessageValue(text)}
      />
      <Pressable onPress={handleSubmit}>
        <Text>Enviar</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.mainColors.primary },
  myMessage: {
    backgroundColor: "blue",
    height: 300,
  },
  notMyMessage: {
    backgroundColor: "red",
    height: 300,
  },
  userInput: {},
});
