import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ChatProvisional from "../components/ChatDeMentira";
import { supabase } from "../utils/supabaseClient";

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

  return <View>{session && <ChatProvisional session={session} />}</View>;
}
