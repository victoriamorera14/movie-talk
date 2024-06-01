import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import ChatProvisional from "../components/ChatDeMentira";
import { supabase } from "../utils/supabaseClient";
import { colors } from "../utils/colors";

export default function Chat() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === "SIGNED_IN") {
        setSession(session);
      } else if (event === "SIGNED_OUT") {
        setSession(null);
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
  <View style={styles.container}>
      {session && <ChatProvisional session={session} />}
    </View>
  );
}

//{session && <ChatProvisional session={session} />}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor:colors.mainColors.primary,
    alignItems: "center",
    padding: 15,
  },
  containerChat: {
    height: "100%",
    width: "100%",
    backgroundColor:colors.mainColors.gray1,
    borderRadius: 20,
  },
});