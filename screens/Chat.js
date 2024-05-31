import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ChatProvisional from "../components/ChatDeMentira";
import { supabase } from "../utils/supabaseClient";

export default function Chat() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const { data } = async () => {
      await supabase.auth.getSession();
    };
    setSession(data);
    console.log(data);
  }, []);

  return <View>{session && <ChatProvisional session={session} />}</View>;
}
